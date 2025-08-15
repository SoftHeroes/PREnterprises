$(document).ready(function() {
    'use strict';

    // Cookie utility functions
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function deleteCookie(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    // Check if user has already seen/submitted the brochure modal
    function isFirstTimeVisitor() {
        return !getCookie('prEnterprisesBrochureShown');
    }

    // Mark user as having seen the modal (with timestamp and email info)
    function markBrochureShown(email) {
        var cookieValue = JSON.stringify({
            shown: true,
            timestamp: new Date().toISOString(),
            email: email || 'unknown'
        });
        setCookie('prEnterprisesBrochureShown', cookieValue, 90); // 90 days expiration
    }

    // Debug function to check cookie status (useful for testing)
    function checkBrochureCookieStatus() {
        var cookie = getCookie('prEnterprisesBrochureShown');
        if (cookie) {
            try {
                var data = JSON.parse(cookie);
                console.log('Brochure cookie found:', data);
                return data;
            } catch(e) {
                console.log('Cookie exists but not JSON:', cookie);
                return { shown: true, legacy: true };
            }
        } else {
            console.log('No brochure cookie found - first time visitor');
            return null;
        }
    }

    // Email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Debug: Log current cookie status
    console.log('Brochure Modal Debug Info:');
    checkBrochureCookieStatus();

    // Show modal with delay for first-time visitors
    if (isFirstTimeVisitor()) {
        setTimeout(function() {
            $('#brochureModal').modal('show');
        }, 2000);
    }

    // Handle form submission via button click
    $(document).on('click', '.brochure-btn-primary-compact', function(e) {
        e.preventDefault();
        sendBrochure();
    });

    // Handle form submission
    $('#brochureForm').on('submit', function(e) {
        e.preventDefault();
        sendBrochure();
    });

    function sendBrochure() {
        var email = $('#brochureEmail').val().trim();
        var name = $('#brochureName').val().trim();
        var company = $('#brochureCompany').val().trim();

        // Validate email
        if (!email) {
            alert('Please enter your email address. 📧');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address. 📧');
            return;
        }

        // Show loading state on button
        var $button = $('.brochure-btn-primary-compact');
        $button.addClass('loading').prop('disabled', true);

        // Show loading overlay
        $('body').waitMe({
            effect: 'timer',
            text: 'Sending Brochure...',
            bg: '#00000052',
            color: '#bd3136',
            maxSize: '',
            waitTime: -1,
            textPos: 'vertical',
            fontSize: '',
            source: '',
            onClose: function () {}
        });

        // Prepare EmailJS data for brochure delivery
        var emailData = {
            service_id: 'MyGmail',
            template_id: 'brochure_pdf', // New template for brochure delivery
            user_id: 'user_4DCykVQ9Rqg021NgIWqWE',
            template_params: {
                'to_email': email,
                'to_name': name || 'Valued Customer',
                'company': company || 'Your Company',
            }
        };

        // Send brochure via EmailJS
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(emailData),
            contentType: 'application/json'
        }).done(function() {
            $('body').waitMe('hide');
            $button.removeClass('loading').prop('disabled', false);
            
            // Show compact success message
            $('#brochureModal .modal-body').html(`
                <div class="text-center py-3">
                    <div class="success-icon mb-3">
                        <i class="fas fa-check-circle" style="color: #28a745; font-size: 2.5rem;"></i>
                    </div>
                    <h5 class="text-success mb-2">Brochure Sent! ✅</h5>
                    <p class="mb-2">We've sent the brochure to <strong>${email}</strong></p>
                    <p class="text-muted small">Check your email (including spam folder)</p>
                </div>
            `);

            // Update footer for success state
            $('#brochureModal .modal-footer').html(`
                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
            `);

            // Mark as shown with user email and set form submitted flag
            markBrochureShown(email);
            formSubmitted = true;
            
            setTimeout(function() {
                $('#brochureModal').modal('hide');
            }, 4000);

        }).fail(function(error) {
            $('body').waitMe('hide');
            $button.removeClass('loading').prop('disabled', false);
            
            console.error('EmailJS Error:', error);
            alert('Sorry, there was an issue sending the brochure. Please try again or contact us directly. 😖');
        });
    }

    // Track if user has successfully submitted the form
    var formSubmitted = false;

    // Handle modal close - only mark as shown if form was submitted
    $('#brochureModal').on('hidden.bs.modal', function() {
        // Only set cookie if user successfully submitted the form
        // If they just closed without submitting, they'll see the modal again
        if (!formSubmitted) {
            // Modal was closed without submission - don't set cookie
            console.log('Modal closed without form submission - will show again on next visit');
        }
        // Reset form submitted flag for next time
        formSubmitted = false;
    });

    // Handle "No Thanks" button - don't mark as shown
    $(document).on('click', '.btn-link', function() {
        $('#brochureModal').modal('hide');
        // Explicitly don't mark as shown - user declined
    });

    // Prevent modal from closing when clicking outside (optional)
    $('#brochureModal').modal({
        backdrop: 'static',
        keyboard: true
    });

    // Add smooth focus transitions
    $('#brochureEmail, #brochureName, #brochureCompany').on('focus', function() {
        $(this).closest('.form-group').addClass('focused');
    }).on('blur', function() {
        if (!$(this).val()) {
            $(this).closest('.form-group').removeClass('focused');
        }
    });

    // Real-time email validation feedback
    $('#brochureEmail').on('input', function() {
        var email = $(this).val().trim();
        var isValid = emailRegex.test(email);
        
        if (email && !isValid) {
            $(this).addClass('is-invalid');
            $(this).removeClass('is-valid');
        } else if (email && isValid) {
            $(this).addClass('is-valid');
            $(this).removeClass('is-invalid');
        } else {
            $(this).removeClass('is-valid is-invalid');
        }
    });
});
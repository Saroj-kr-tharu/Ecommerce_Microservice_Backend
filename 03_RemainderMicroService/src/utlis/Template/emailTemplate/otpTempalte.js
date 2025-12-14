function generateOtpEmail(otp) {
    const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>One Time Password </title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 20px 0; text-align: center; background-color: #f4f4f4;">
                <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <!-- Header with Logo -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
                            <div style="background-color: white; display: inline-block; padding: 15px 25px; border-radius: 8px;">
                                <svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5" y="5" width="30" height="30" rx="5" fill="#667eea"/>
                                    <circle cx="20" cy="20" r="8" fill="white"/>
                                    <text x="45" y="27" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#333">ECOM</text>
                                </svg>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <h1 style="margin: 0 0 20px; color: #333333; font-size: 24px; font-weight: bold; text-align: center;">
                                One Time Password
                            </h1>
                            
                            <p style="margin: 0 0 20px; color: #666666; font-size: 16px; line-height: 1.6; text-align: center;">
                                Hello! We received a request to login  your account.
                            </p>
                            
                            <!-- OTP Box -->
                            <table role="presentation" style="width: 100%; margin: 30px 0;">
                                <tr>
                                    <td style="text-align: center;">
                                        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: inline-block; padding: 20px 40px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                            <span style="color: #ffffff; font-size: 32px; font-weight: bold; letter-spacing: 8px; font-family: 'Courier New', monospace;">
                                                ${otp}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="margin: 20px 0; color: #666666; font-size: 14px; line-height: 1.6; text-align: center;">
                                This code will expire in <strong>5 minutes</strong>. Please do not share this code with anyone.
                            </p>
                            
                            <p style="margin: 20px 0; color: #666666; font-size: 14px; line-height: 1.6; text-align: center;">
                                If you didn't request this code, please ignore this email or contact our support team.
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px; background-color: #f9f9f9; text-align: center;">
                            <p style="margin: 0 0 10px; color: #999999; font-size: 12px;"> Ecom
                                © 2024  Inc. All rights reserved.
                            </p>
                            <p style="margin: 0 0 15px; color: #999999; font-size: 12px;">
                                123 Tech Street, Silicon Valley, CA 94000
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

    
    return template;
}



module.exports = generateOtpEmail;
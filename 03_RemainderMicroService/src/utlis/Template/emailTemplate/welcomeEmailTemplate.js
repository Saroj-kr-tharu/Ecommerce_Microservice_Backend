const WelcomeEmailTemplate = (username = "User") => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to MarketMandu</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; background-color: #f6f9fc;">
    <!-- Email Container -->
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f6f9fc; font-family: 'Poppins', Arial, sans-serif;">
        <tr>
            <td style="padding: 20px 0;">
                <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.1);">
                    <!-- Header with Enhanced Logo -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%); padding: 40px 0; text-align: center; border-radius: 16px 16px 0 0;">
                            <div style="background: rgba(255, 255, 255, 0.1); padding: 20px; margin: 0 auto; width: fit-content; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                                <div style="font-size: 48px; margin-bottom: 10px;">🛒</div>
                                <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: 1px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">MarketMandu</h1>
                                <p style="margin: 5px 0 0; color: rgba(255,255,255,0.9); font-size: 14px; font-weight: 400;">Your Trusted Online Marketplace</p>
                            </div>
                        </td>
                    </tr>

                    <!-- Welcome Message -->
                    <tr>
                        <td style="padding: 40px 30px 20px;">
                            <h2 style="margin: 0 0 20px; background: linear-gradient(to right, #10b981, #047857); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 32px; text-align: center; font-weight: 700;">
                                Welcome to MarketMandu, ${username}! 🎉
                            </h2>
                            
                            <img src="https://img.freepik.com/free-vector/shopping-concept-illustration_114360-1084.jpg" alt="Shopping Illustration" style="width: 100%; max-width: 500px; height: auto; margin: 20px 0; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">

                            <p style="margin: 0 0 15px; color: #1e293b; font-size: 18px; line-height: 1.8; font-weight: 600;">
                                Dear ${username},
                            </p>

                            <p style="margin: 0 0 15px; color: #334155; font-size: 16px; line-height: 1.8;">
                                🎊 Thank you for joining MarketMandu! We're thrilled to have you as part of our growing community of smart shoppers. Get ready to discover amazing products, unbeatable deals, and a seamless shopping experience like never before.
                            </p>

                            <p style="margin: 30px 0 15px; color: #1e293b; font-size: 18px; line-height: 1.8; font-weight: 600;">
                                What's waiting for you: 🌟
                            </p>

                            <ul style="margin: 0 0 20px; padding-left: 20px;">
                                <li style="color: #334155; margin-bottom: 15px; font-size: 16px; line-height: 1.6;">
                                    <span style="color: #10b981; font-weight: 600;">Thousands of Quality Products</span> 🛍️
                                </li>
                                <li style="color: #334155; margin-bottom: 15px; font-size: 16px; line-height: 1.6;">
                                    <span style="color: #10b981; font-weight: 600;">Exclusive Member Deals & Discounts</span> 💰
                                </li>
                                <li style="color: #334155; margin-bottom: 15px; font-size: 16px; line-height: 1.6;">
                                    <span style="color: #10b981; font-weight: 600;">Fast & Secure Checkout</span> ⚡
                                </li>
                                <li style="color: #334155; margin-bottom: 15px; font-size: 16px; line-height: 1.6;">
                                    <span style="color: #10b981; font-weight: 600;">Order Tracking & Quick Delivery</span> 📦
                                </li>
                                <li style="color: #334155; margin-bottom: 15px; font-size: 16px; line-height: 1.6;">
                                    <span style="color: #10b981; font-weight: 600;">24/7 Customer Support</span> 💬
                                </li>
                            </ul>

                            <!-- Call to Action Button -->
                            <div style="text-align: center; margin: 30px 0;">
                                <a href="#" style="display: inline-block; background: linear-gradient(135deg, #10b981, #047857); color: #ffffff; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);">
                                    Start Shopping Now 🛒
                                </a>
                            </div>

                            <p style="margin: 20px 0 0; color: #334155; font-size: 16px; line-height: 1.8;">
                                Happy shopping, and welcome to the MarketMandu family!
                            </p>

                            <p style="margin: 10px 0 0; color: #334155; font-size: 16px; line-height: 1.8; font-weight: 600;">
                                The MarketMandu Team 💚
                            </p>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px; background-color: #f8fafc; border-radius: 0 0 16px 16px; text-align: center;">
                            <p style="margin: 0 0 10px; color: #64748b; font-size: 14px;">
                                Need help? Contact us at <a href="mailto:support@marketmandu.com" style="color: #10b981; text-decoration: none;">support@marketmandu.com</a>
                            </p>
                            <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                                © 2024 MarketMandu. All rights reserved.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

module.exports = WelcomeEmailTemplate;
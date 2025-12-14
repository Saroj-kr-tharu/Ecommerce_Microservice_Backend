const generateOrderEmail = (data) => {
    const {
        id,
        customerName,
        orderId,
        email,
        orderItems,
        shipping_fee,
        tax,
        deliveryEstimatedDate,
        transactionId,
        notificationTime,
        amount,
        currency
    } = data;
    
    // Validate required fields
    if (!id || !customerName || !email || !orderItems || !Array.isArray(orderItems)) {
        throw new Error('Missing required fields for order confirmation email');
    }
    
    // Format delivery date
    const deliveryDate = new Date(deliveryEstimatedDate).toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Kathmandu'
    });

    // Format order date
    const orderDate = new Date(notificationTime || Date.now()).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kathmandu'
    });

    // Calculate subtotal
    const subtotal = orderItems.reduce((sum, item) => sum + (item.total || 0), 0);
    
    // Format currency amounts
    const formatAmount = (value) => `${currency.toUpperCase()} ${Number(value).toFixed(2)}`;
    
    // Generate order items HTML
    const orderItemsHTML = orderItems.map(item => `
        <tr>
            <td style="padding: 16px; border-bottom: 1px solid #e5e7eb;">
                <div style="font-weight: 600; color: #0f172a; font-size: 15px; margin-bottom: 4px;">${item.Name}</div>
                <div style="color: #64748b; font-size: 13px;">Quantity: ${item.qty}</div>
            </td>
            <td style="padding: 16px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600; color: #0f172a; white-space: nowrap;">${formatAmount(item.total)}</td>
        </tr>
    `).join('');

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Confirmation - MarketMandu</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f0fdfa; font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; color: #333;">
        <div style="max-width: 650px; margin: 40px auto; background: white; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); overflow: hidden;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%); padding: 48px 32px; text-align: center; position: relative;">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.1; background: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E') center/30px;"></div>
                <div style="position: relative;">
                    <div style="background: white; width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px rgba(0,0,0,0.1);">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 0.5px;">Order Confirmed!</h1>
                    <p style="color: rgba(255,255,255,0.95); margin: 12px 0 0; font-size: 18px; font-weight: 500;">Thank you for shopping with MarketMandu</p>
                </div>
            </div>

            <!-- Order Summary -->
            <div style="padding: 40px 32px;">
                <!-- Customer Info -->
                <div style="margin-bottom: 32px;">
                    <h2 style="color: #0f172a; font-size: 20px; font-weight: 700; margin: 0 0 16px;">Hello ${customerName},</h2>
                    <p style="color: #475569; font-size: 15px; line-height: 1.6; margin: 0;">Your order has been confirmed and will be shipped soon. We'll send you tracking information once your order is on its way.</p>
                </div>

                <!-- Order Details Card -->
                <div style="background: #f0fdfa; border-radius: 16px; padding: 24px; margin-bottom: 32px; border: 2px solid #99f6e4;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                        <div>
                            <p style="color: #0d9488; font-size: 13px; margin: 0 0 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Order Number</p>
                            <p style="color: #0f172a; font-size: 18px; font-weight: 700; margin: 0; font-family: monospace;">#${orderId}</p>
                        </div>
                        <div>
                            <p style="color: #0d9488; font-size: 13px; margin: 0 0 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Order Date</p>
                            <p style="color: #0f172a; font-size: 16px; font-weight: 600; margin: 0;">${orderDate}</p>
                        </div>
                    </div>
                    <div style="padding-top: 20px; border-top: 1px solid #5eead4;">
                        <p style="color: #0d9488; font-size: 13px; margin: 0 0 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Estimated Delivery</p>
                        <p style="color: #0f172a; font-size: 16px; font-weight: 600; margin: 0;">${deliveryDate}</p>
                    </div>
                </div>

                <!-- Order Items -->
                <div style="background: white; border-radius: 16px; margin-bottom: 24px; border: 1px solid #e5e7eb; overflow: hidden;">
                    <div style="background: #f8fafc; padding: 16px 20px; border-bottom: 2px solid #e5e7eb;">
                        <h3 style="margin: 0; color: #0f172a; font-size: 16px; font-weight: 700;">Order Items</h3>
                    </div>
                    <table style="width: 100%; border-collapse: collapse;">
                        ${orderItemsHTML}
                    </table>
                </div>

                <!-- Price Breakdown -->
                <div style="background: linear-gradient(to right, #f0fdfa, #ccfbf1); border-radius: 16px; padding: 28px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                    <h3 style="margin-top: 0; margin-bottom: 20px; color: #0f172a; font-size: 17px; font-weight: 700;">Order Summary</h3>
                    
                   <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                            <td style="color: #475569; font-size: 15px; font-weight: 500; padding: 8px 0;">Subtotal</td>
                            <td style="color: #0f172a; font-size: 15px; font-weight: 600; text-align: right; padding: 8px 0;">${formatAmount(subtotal)}</td>
                        </tr>
                        <tr>
                            <td style="color: #475569; font-size: 15px; font-weight: 500; padding: 8px 0;">Shipping Fee</td>
                            <td style="color: #0f172a; font-size: 15px; font-weight: 600; text-align: right; padding: 8px 0;">${formatAmount(shipping_fee)}</td>
                        </tr>
                        <tr>
                            <td style="color: #475569; font-size: 15px; font-weight: 500; padding: 8px 0 20px 0; border-bottom: 2px solid #5eead4;">Tax</td>
                            <td style="color: #0f172a; font-size: 15px; font-weight: 600; text-align: right; padding: 8px 0 20px 0; border-bottom: 2px solid #5eead4;">${formatAmount(tax)}</td>
                        </tr>
                        <tr>
                            <td style="color: #0d9488; font-size: 18px; font-weight: 700; padding: 20px 0 0 0;">Total Amount</td>
                            <td style="color: #0d9488; font-size: 24px; font-weight: 800; letter-spacing: 0.5px; text-align: right; padding: 20px 0 0 0;">${formatAmount(amount)}</td>
                        </tr>
                    </table>
                    
                   <table style="width: 100%; background: white; border-radius: 8px; padding: 12px 16px; border: 1px solid #99f6e4; border-collapse: collapse;">
                        <tr>
                            <td style="color: #64748b; font-size: 13px; font-weight: 600; padding: 0;">Transaction ID</td>
                            <td style="color: #475569; font-size: 13px; font-family: monospace; background: #f8fafc; padding: 6px 10px; border-radius: 6px; font-weight: 600; text-align: right;">${transactionId}</td>
                        </tr>
                    </table>
                </div>
            </div>

            <!-- Shipping Address Note -->
            <div style="padding: 0 32px 32px;">
                <div style="background: #ecfdf5; border-radius: 12px; padding: 20px 24px; border-left: 4px solid #14b8a6;">
                    <h3 style="color: #0d9488; font-size: 15px; margin: 0 0 12px; font-weight: 700; display: flex; align-items: center;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        Delivery Information
                    </h3>
                    <ul style="margin: 0; padding-left: 28px; color: #0f766e; font-size: 14px; line-height: 1.7;">
                        <li style="margin-bottom: 6px;">Your order will be delivered to the address provided during checkout</li>
                        <li style="margin-bottom: 6px;">You'll receive a tracking number via email once shipped</li>
                        <li>Please ensure someone is available to receive the package</li>
                    </ul>
                </div>
            </div>

            <!-- Support Section -->
            <div style="padding: 0 32px 32px;">
                <div style="background: #f8fafc; border-radius: 12px; padding: 20px 24px; text-align: center;">
                    <h3 style="color: #334155; font-size: 15px; margin: 0 0 8px; font-weight: 600;">Need Help?</h3>
                    <p style="color: #64748b; font-size: 14px; margin: 0;">Our customer support team is here to assist you</p>
                    <a href="mailto:support@marketmandu.com" style="display: inline-block; margin-top: 16px; background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%); color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);">Contact Support</a>
                </div>
            </div>

            <!-- Footer -->
            <div style="text-align: center; padding: 32px; background: linear-gradient(to bottom, #f0fdfa, #ccfbf1); border-top: 1px solid #99f6e4;">
                <div style="margin-bottom: 16px;">
                    <h2 style="color: #0d9488; font-size: 24px; font-weight: 800; margin: 0; letter-spacing: -0.5px;">MarketMandu</h2>
                    <p style="color: #0f766e; font-size: 13px; margin: 4px 0 0; font-weight: 500;">Your Trusted Online Marketplace</p>
                </div>
                <p style="margin: 0; color: #64748b; font-size: 13px;">© ${new Date().getFullYear()} MarketMandu. All rights reserved.</p>
                <p style="margin: 12px 0 0; color: #94a3b8; font-size: 12px;">
                    Questions? Email us at <a href="mailto:support@marketmandu.com" style="color: #14b8a6; text-decoration: none; font-weight: 600;">support@marketmandu.com</a>
                </p>
            </div>
        </div>
    </body>
    </html>
    `;
};

module.exports = generateOrderEmail;
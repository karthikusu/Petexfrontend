// Order.js

function generateOrderPDF(order) {
    // Format the order data into sections
    const userDetails = `User ID: ${order.user.userId}\nName: ${order.user.name}\nEmail: ${order.user.email}`;
    const productDetails = `Product ID: ${order.product.productId}\nName: ${order.product.name}\nPrice: ${order.product.price}\nQuantity: ${order.quantity}`;
    const orderDetails = `Order ID: ${order.orderId}\nDate: ${order.date}\nStatus: ${order.status}`;
    const totalPrice = `Total Price: ${order.totalPrice}`;

    // Initialize jsPDF
    const doc = new jsPDF();

    // Set document properties
    doc.setFontSize(12);

    // Add sections to the PDF
    doc.text("Order Details", 10, 10);
    doc.text("----------------------------", 10, 15);

    doc.text("User Details:", 10, 25);
    doc.text(userDetails, 10, 30);

    doc.text("Product Details:", 10, 60);
    doc.text(productDetails, 10, 65);

    doc.text("Order Details:", 10, 100);
    doc.text(orderDetails, 10, 105);

    doc.text(totalPrice, 10, 140);

    // Save the PDF
    doc.save("order_details.pdf");
}

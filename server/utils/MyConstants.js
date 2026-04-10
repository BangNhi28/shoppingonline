const MyConstants = {
  // MongoDB Atlas
  DB_SERVER: "banhang.vp7lu0d.mongodb.net",
  DB_USER: "BangNhi",
  DB_PASS: "nhicute", // 👈 Đảm bảo đây là password ĐÚNG
  DB_DATABASE: "shoppingonline", // 👈 SỬA THÀNH shoppingonline

  // Email (Hotmail/Outlook) - Có thể để placeholder nếu chưa dùng
  EMAIL_USER: "nguyenaibangvts02@gmail.com",
  EMAIL_PASS: "zrmj amnw juqd bsfp",

  // JWT (JSON Web Token)
  JWT_SECRET: "shoppingonline_secret_key_2024", // 👈 Nên đặt chuỗi phức tạp hơn
  JWT_EXPIRES: "86400000", // 24 giờ
};

module.exports = MyConstants;

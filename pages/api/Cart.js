import cookie from "cookie"

export default (req, res) => {
    console.log(req);
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("products", JSON.stringify(req.body.products_Details), {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 7*24*60*60*1000,
        sameSite: "strict",
        path: "/",
      })
    );
    res.statusCode = 200;
    res.json({ success: true });
};
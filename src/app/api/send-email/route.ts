import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, message } = await req.json();

  const myEmail = process.env.EMAIL_ADDRESS;
  const myPassword = process.env.EMAIL_PASSWORD;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: myEmail,
      pass: myPassword,
    },
  });

  const mailOption = {
    from: myEmail,
    to: myEmail,
    subject: `New message from ${email}. Portfolio Contact Form`,
    html: `
        <p>
        Wysłane przez: <a href=mailto:${email}>${email}</a>
        <br />
        <br />
        Message:
        <br />
        <br />
        ${message}
        </p>
        `,
  };

  if (!email && !message) {
    console.log(email, message);
    return NextResponse.json(
      {
        message: "Required email and message fields",
      },
      {
        status: 400,
      },
    );
  } else if (!email) {
    return NextResponse.json(
      {
        message: "Required email field",
      },
      {
        status: 400,
      },
    );
  } else if (!message) {
    return NextResponse.json(
      {
        message: "Required message field",
      },
      {
        status: 400,
      },
    );
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return NextResponse.json(
      {
        message: "Invalid email",
      },
      {
        status: 400,
      },
    );
  } else {
    try {
      await transporter.sendMail(mailOption);

      return NextResponse.json(
        {
          message: "Thank you! Your message has been sent",
        },
        {
          status: 200,
        },
      );
    } catch (error) {
      return NextResponse.json(
        {
          message: "Something went wrong",
        },
        {
          status: 500,
        },
      );
    }
  }
}

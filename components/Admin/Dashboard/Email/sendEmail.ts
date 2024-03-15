const sendEmail = async (
  recipientName: string,
  recipientEmail: string,
  message: string
) => {
  const payload = {
    recipients: [
      {
        to: [
          {
            name: recipientName,
            email: "mhdammman@gmail.com",
          },
        ],
      },
    ],
    from: {
      name: "Joe",
      email: "noreply@hostelbird.com",
    },
    domain: "hostelbird.com",
    reply_to: [{ email: "carigar@dhdhd.com" }, { email: "reply2@email.com" }],
    template_id: "hostelbird",
    message: "hfffasgfafakhsbh",
  };

  const url = "https://control.msg91.com/api/v5/email/send";
  const authkey = "401254A2VYSvl2Gm6537c22bP1";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authkey: authkey,
      },
      body: JSON.stringify(payload),
      credentials: "include",
      mode: "cors",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default sendEmail;

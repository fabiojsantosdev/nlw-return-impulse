import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: "12ef553b614d67",
    pass: "7a3c7e6d1197d5"
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Fábio Santos <fabio.santos.493@gmail.com>',
      subject,
      html: body,
    });
  }
}

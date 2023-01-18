import mailer from 'nodemailer'

export const EmailAuth = async(email:string) =>{
    let check:boolean = false
    const transporter = mailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.NODEMAILER_USER,
            pass:process.env.NODEMAILER_PASS,
        },
    })
    
    const mailOptions = {
        form: process.env.NODEMAILER_USER,
        to: email,
        subject: 'Paradise Farm Email Authentication',
        html: `<h1>이메일 인증</h1>
              <div>
                아래 버튼을 눌러 인증을 완료해주세요.
                <a href='http://localhost:3000'>이메일 인증하기</a>
              </div>`,
    }
    
   transporter.sendMail(mailOptions,(err,info)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('Successfully Send Email.', info.response);
        check = true
		transporter.close()
    }
   })
   return check
}




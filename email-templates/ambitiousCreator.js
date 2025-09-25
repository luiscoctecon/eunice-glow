const ambitiousCreatorTemplate = (name) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; margin-bottom: 30px; }
        .button { 
            display: inline-block;
            padding: 12px 24px;
            background: linear-gradient(135deg, #60A5FA, #3B82F6);
            color: #fff;
            text-decoration: none;
            border-radius: 25px;
            font-weight: bold;
            margin: 20px 0;
        }
        .signature { margin-top: 40px; font-style: italic; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Your Vision Deserves to Become Reality</h1>
        </div>
        
        <p>Hi ${name},</p>
        
        <p>I can already tell—you're ambitious, creative, and you know deep down you were made for more. Success isn't just a dream for you, it's a calling.</p>
        
        <p>But I also know how exhausting it feels to work hard and still feel like the results don't match your effort. Or to have the vision, but not the clarity or strategies to bring it to life.</p>
        
        <p>You don't have to do it alone anymore. 💡</p>
        
        <p>That's why I designed a business-focused workshop for women like you—where we talk about visibility, strategy, and how to turn confidence into actual opportunities.</p>
        
        <p>And even more powerful—you'll step into a community of ambitious women who get what it feels like to dream bigger, push through doubts, and rise together.</p>
        
        <center>
            <a href="[WORKSHOP_LINK]" class="button">Save Your Spot Now</a>
        </center>
        
        <p>💫 This is your time to stop holding back and finally create the life (and business) you've been visualizing.</p>
        
        <div class="signature">
            <p>Cheering for you always,<br>Eunice</p>
        </div>
    </div>
</body>
</html>
`;
const styleTransformerTemplate = (name) => `
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
            background: linear-gradient(135deg, #ffd700, #f6ad55);
            color: #000;
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
            <h1>✨ Your Style Transformation Journey ✨</h1>
        </div>
        
        <p>Hi ${name},</p>
        
        <p>I know that for you, confidence starts with the woman you see in the mirror. You dream of walking out the door, head held high, knowing that your hair, makeup, and style reflect the powerful woman inside.</p>
        
        <p>And I also know how frustrating it feels when you try product after product, trend after trend… and still feel like something is missing.</p>
        
        <p>That's why I created a space just for women like you—where personal image is more than "looking pretty." It's about unlocking the energy that makes you magnetic. 🌹</p>
        
        <p>💫 I'd love to invite you to my upcoming workshop, where we'll go step by step into the secrets of styling, confidence, and the little details that make you shine effortlessly.</p>
        
        <p>And the best part? You won't be doing this alone—you'll join a community of women who are also rewriting their stories and supporting each other every step of the way.</p>
        
        <center>
            <a href="[WORKSHOP_LINK]" class="button">Join the Workshop Now</a>
        </center>
        
        <p>✨ Are you ready to fall in love with your reflection again?</p>
        
        <div class="signature">
            <p>With love,<br>Eunice</p>
        </div>
    </div>
</body>
</html>
`;
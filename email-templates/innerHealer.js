const innerHealerTemplate = (name) => `
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
            background: linear-gradient(135deg, #F472B6, #EC4899);
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
            <h1>💫 Your Journey to Inner Peace</h1>
        </div>
        
        <p>Hi ${name},</p>
        
        <p>I feel your heart. You've been carrying so much inside—moments of doubt, heaviness, and maybe even loneliness.</p>
        
        <p>But here's the truth: the fact that you're here, taking this test, means that deep down you already know you're ready for change. You're ready to release old patterns and step into the peace, clarity, and confidence you've always deserved. 🌙</p>
        
        <p>I created a healing & empowerment workshop where we'll work on inner talk, emotions, and building that inner strength that nobody can take away from you.</p>
        
        <p>And the most beautiful part—you'll meet other women walking the same path. Women who want to break free from the same cycles and finally rise together. Because healing doesn't have to be lonely. 🌸</p>
        
        <center>
            <a href="[WORKSHOP_LINK]" class="button">Begin Your Healing Journey</a>
        </center>
        
        <p>✨ This could be the first step toward the lighter, more joyful life you've been craving.</p>
        
        <div class="signature">
            <p>With all my heart,<br>Eunice</p>
        </div>
    </div>
</body>
</html>
`;
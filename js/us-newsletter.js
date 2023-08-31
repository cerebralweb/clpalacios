//SIRVE EL NEWSLETTER EN ESPAÑOL
const newsletter_es = `   
<h4>Subscribe</h4>
            
<p>Dear reader, subscribe and receive for free a collection of short stories. Subscribers can take part in
marketing research projects (and get prizes), and being beta readers </p>
<form 
    name="contact" 
    method="POST"
    action="/us-infographics-404.html"  
    
    netlify
    >
  
  <input 
  type="hidden"
  name="form-name"
  value="contact"
  >  
  
  <p>
  <label for="email">Your email:
    <input 
    name="email"
    type="email"
    required
    title="It should be a valid email :)"
    pattern="[a-zA-Z0-9_.]{5,31}@(([a-zA-Z0-9]{2,6}\.)([a-zA-Z0-9]{2,4})){1}(\.[a-zA-Z0-9]{2,3})?"
    >
    
  </label>
  </p>
 
  <p>
    <button type="submit">Send</button>
  </p>
</form>


<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>



`;
document.getElementById('us-newsletter').insertAdjacentHTML('afterbegin', newsletter_es);
//problem ? in the regex: an escaped dot (just erase the regex)
//action="/us-infographics-404.html"  
//    data-netlify="true"
 
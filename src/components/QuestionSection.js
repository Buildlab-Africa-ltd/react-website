import React from 'react'
import './QuestionSection.css';

function QuestionSection() {

  var faq = document.getElementsByClassName("faq-page");
  var i;
  for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

  return ( 
    
    <div className='faq'>
      <h1 class="faq-heading">FAQ'S</h1>
        <div class="faq-container">
            <div class="faq-one">
              
                <h1 class="faq-page">HOW LONG WILL THE TRAINING LAST?</h1>
                
                <div class="faq-body">
                    <p>The program will run for 7 weeks.</p>
                    
                </div>
            </div>
            <hr class="hr-line"></hr>
            <div class="faq-two">
                
                <h1 class="faq-page">DO I HAVE TO TAKE TRAINING TO APPLY ?</h1>
                
                <div class="faq-body">
                    <p>Yes, The Internship Bootcamp is for those who have taken atleast a course in a
                       chosen tech track and wants to learn more, build a portfolio and gain
                       professional experience.</p>
                </div>
            </div>
            <hr class="hr-line"></hr>
            <div class="faq-three">
                
             <h1 class="faq-page">ARE LIVE SESSIONS FOR SPRINT REPORT COMPULSORY ?</h1>
                
                <div class="faq-body">
                    <p>Yes it is mandatory for all to attend. It will also aid you to learn more from feedbacks.</p>
                </div>
            </div>
            <hr class="hr-line"></hr>

            <div class="faq-four">
                
             <h1 class="faq-page">CAN I GET DISQUALIFIED FROM THE PROGRAM ?</h1>
                
                <div class="faq-body">
                    <p>Yes. if any of the rules and regulations that is usually sent to qualified interns before the bootcamp. The intern shall be disqualified.</p>
                </div>
            </div>
            <hr class="hr-line"></hr>

            <div class="faq-five">
                
             <h1 class="faq-page">WHEN WILL I BE NOTIFIED IF I HAVE BEEN SELECTED ?</h1>
                
                <div class="faq-body">
                    <p>Two weeks after submitting your application.</p>
                </div>
            </div>
            <hr class="hr-line"></hr>

            <div class="faq-six">
                
             <h1 class="faq-page">WHAT WILL I LEARN FROM THE TECH BOOTCAMP?</h1>
                
                <div class="faq-body">
                    <p>A. Product Development: You will gain practical experience on how to build and
                       manage a product lifecycle.
                       B. Portfolio: You will learn how to build a portfolio that enables you to secure a Tech
                       job.
                       C. TeamWork: You will gain practical experience on how to work with a cross-functional
                       team during a product lifecycle.
                       D. Mentorship: You will have a live session with experienced mentors in your field.
                       E. Paid internship job placement.</p>
                </div>
            </div>
            <hr class="hr-line"></hr>

            <div class="faq-seven">
                
             <h1 class="faq-page">WILL I BE ISSUED A CERTIFICATE?</h1>
                
                <div class="faq-body">
                    <p>Yes, certificates will be issued to all active participants after they meet up with
                       their KPIs and capstone product.</p>
                </div>
            </div>
            <hr class="hr-line"></hr>

            <div class="faq-eight">
                
             <h1 class="faq-page">WHAT IF I WANT TO TRANSITION INTO TECH AND WANT TO TAKE A COURSE ?</h1>
                
                <div class="faq-body">
                    <p>We only accept certified and self taught applicants who have the basic
                       knowledge of their chosen track. However, we help individuals transition into the
                       tech industry by providing a career guide session, after which we direct you to
                       our TECH TRAINING PARTNERS to take a course in your chosen track, after
                       which you join our Tech Internship Bootcamp and help you advance your career.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuestionSection

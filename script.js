const defaultConfig = {
      form_title: "Create Your Account",
      submit_button_text: "Register Now",
      modal_title: "Confirm Your Details",
      confirm_button_text: "Confirm & Submit"
    };

    let config = {};
    let confirmationModal;

    async function onConfigChange(newConfig) {
      config = newConfig;
      
      document.getElementById('formTitle').textContent = config.form_title || defaultConfig.form_title;
      document.getElementById('submitButton').textContent = config.submit_button_text || defaultConfig.submit_button_text;
      document.getElementById('confirmationModalLabel').textContent = config.modal_title || defaultConfig.modal_title;
      document.getElementById('confirmSubmit').textContent = config.confirm_button_text || defaultConfig.confirm_button_text;
    }

    function mapToCapabilities(config) {
      return {
        recolorables: [],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
      };
    }

    function mapToEditPanelValues(config) {
      return new Map([
        ["form_title", config.form_title || defaultConfig.form_title],
        ["submit_button_text", config.submit_button_text || defaultConfig.submit_button_text],
        ["modal_title", config.modal_title || defaultConfig.modal_title],
        ["confirm_button_text", config.confirm_button_text || defaultConfig.confirm_button_text]
      ]);
    }

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });
      config = window.elementSdk.config;
    }

    document.addEventListener('DOMContentLoaded', function() {
      confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
      
      const form = document.getElementById('registrationForm');
      
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
          name: document.getElementById('fullName').value,
          email: document.getElementById('email').value,
          gender: document.getElementById('gender').value,
          contact: document.getElementById('contactNumber').value,
          username: document.getElementById('username').value,
          password: document.getElementById('password').value
        };
        
        document.getElementById('confirmName').textContent = formData.name;
        document.getElementById('confirmEmail').textContent = formData.email;
        document.getElementById('confirmGender').textContent = formData.gender;
        document.getElementById('confirmContact').textContent = formData.contact;
        document.getElementById('confirmUsername').textContent = formData.username;
        document.getElementById('confirmPassword').textContent = '•'.repeat(formData.password.length);
        
        confirmationModal.show();
      });
      
      document.getElementById('confirmSubmit').addEventListener('click', function() {
        confirmationModal.hide();
        
        document.getElementById('formSection').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        
        form.reset();
      });

      onConfigChange(config);
    });
   (function(){
    function c(){
      var b=a.contentDocument||a.contentWindow.document;
      if(b){
        var d=b.createElement('script');
        d.innerHTML="window.__CF$cv$params={r:'99d2937fd442db1f',t:'MTc2MjkxNDI5OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
        b.getElementsByTagName('head')[0].appendChild(d)
      }
      }
      if(document.body){
        var a=document.createElement('iframe');
        a.height=1;
        a.width=1;
        a.style.position='absolute';
        a.style.top=0;a.style.left=0;
        a.style.border='none';
        a.style.visibility='hidden';
        document.body.appendChild(a);
        
        if('loading'!==document.readyState)c();
        else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);
        else{
          var e=document.onreadystatechange||function(){};
          document.onreadystatechange=function(b){
            e(b);
            'loading'!==document.readyState&&(document.onreadystatechange=e,c())
          }
        }
      }
      })();
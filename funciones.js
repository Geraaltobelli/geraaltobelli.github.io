
document.getElementById("infoPersonal").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("inbox").style.justifyContent = "center"
    document.getElementById("inbox").style.display  =""
    
    let edad = 35;
    let domicilio = "Arroyito 1889, Gral San Martin, Buenos Aires ";
    let nacionalidad = "Argentino";
    let telefono = "0303456" ;
    let email = "tapalque@gmail.com";
    
   
    document.getElementById('inbox').innerHTML =  
    "<ol>"+ "Edad: "+ edad + "</ol>" +
    "<ol>"+ "Domicilio: "+  domicilio + "</ol>" +
    "<ol>"+ "Nacionalidad :"+ nacionalidad + "</ol>" +
    "<ol>"+ "Telefono: "+ telefono + "</ol>" +
    "<ol>"+ "E-mail: "+ email + "</ol>" 
   
    });

    document.getElementById("estudios").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("inbox").style.justifyContent = "center"
        document.getElementById("inbox").style.display  =""
        let universitario = "INGENIERIA EN SISTEMAS"  ;
        let curso1 = "DESARROLLADOR FRONT END";
        let curso2 = "OPERADOR LINUX" ;
        let curso3 = "SEGURIDAD ELECTRONICA";
        let curso4 = "ADMINISTRADOR BBDD";
       
        document.getElementById('inbox').innerHTML =  
        "<ol>"+ universitario+  ", Universidad de Buenos Aires."     + "</ol>" +
        "<ol>"+ curso1       +  ", Ticmas."                          + "</ol>" +
        "<ol>"+ curso2       +  ", Educación IT."                    + "</ol>" +
        "<ol>"+ curso3       +  ", Universidad Tecnologica Naciona.l"+ "</ol>" +
        "<ol>"+ curso4       +  ", Edutin Academy."                  + "</ol>"  
             
        });
    
        document.getElementById("aptitudes").addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("inbox").style.justifyContent = "center"
            document.getElementById("inbox").style.display  =""
            let aptitud = "Paquete Office "+"</ol>"+
                          "<ol>" +"CCTV "+"</ol>"+
                          "<ol>"+"Base de Datos "+"</ol>"+ 
                          "<ol>"+"Linux/windows "+"</ol>"+
                          "<ol>"+"TCP/IP"+"</ol>"+
                          "<ol>"+"PHP "+"</ol>"+
                          "<ol>"+"HTML/CCS/JavaScript "+"</ol>"+
                          "<ol>"+"Seguridad Informática"+"</ol>"+
                          "<ol>"+"Switching/Routing "
            
            document.getElementById('inbox').innerHTML =  
            "<ol>"+ aptitud+ "</ol>" 
            
            });

            document.getElementById("exp-laboral").addEventListener("click", function(event) {
                event.preventDefault();
                document.getElementById("inbox").style.display  =""
                document.getElementById("inbox").style.justifyContent = "normal" 

               let experiencia1 = "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
               let experiencia2 ="parrafo2 is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                  "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
               let experiencia3 = "parrafo 3What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
               let experiencia4 = "parrafo 3What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

               document.getElementById('inbox').innerHTML =
               "<ol>"+"Autopistas Del Sol S.A."+"</ol>"+"<p>"+experiencia1+"</p>"+
               "<ol>"+"Samsung."+"</ol>" +"<p>"+experiencia2+"</p>"+
               "<ol>"+"Huawei."+"</ol>" +"<p>"+experiencia3+"</p>"+
               "<ol>"+"Easy."+"</ol>" +"<p>"+experiencia4+"</p>"
                
                });
             
                document.getElementById("idiomas").addEventListener("click", function(event) {
                    event.preventDefault();
                    document.getElementById("inbox").style.display  =""
                    document.getElementById("inbox").style.justifyContent = "center" 
    
                    let idioma1 = "* Ingles"
                    let idioma2 = "* Chino Mandarin"
                    let  idioma3 = "* Guarani"
    
                   document.getElementById('inbox').innerHTML =
                   "<ol>"+idioma1+", UNSAM. Desde Año 2012 al Corriente."+
                   "<ol>"+idioma2+", Centro Universiario de Idiomas. 2017-2019"+
                   "<ol>"+idioma3+", UNSAM. Desde 2007 al 2011"
                   
                    });
      
    
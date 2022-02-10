module.exports = function(RED) {
    function velocityNode(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.classType = config.classType;
        this.unitMeasure = config.unitMeasure;
        var node = this;
        node.on('input', function(msg) {
            var p=msg.payload;
            let settings = {
             name: p.name || node.name || "",
             classType: p.classType || node.classType,
             unitMeasure: p.unitMeasure || node.unitMeasure,
            };
            var res = {};
            
            // Class I - Small machines
            if(settings.classType == "class_I"){
            
              // Unit measure: in/s
              if(settings.unitMeasure == "in_s"){
              
                 // Good threshold
                 if(msg.payload > 0.01 && msg.payload <= 0.04){
                   
                   msg.payload = "good"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 0.04 && msg.payload <= 0.11){
                   
                   msg.payload = "satisfactory"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 0.11 && msg.payload <= 0.28){
                   
                   msg.payload = "unsatisfactory"
                 
                 }
                 
                 // Unaccettable threshold
                 if(msg.payload > 0.28 && msg.payload <= 1.77){
                   
                   msg.payload = "unaccettable"
                 
                 }
                 
              }
              
              // Unit measure: mms/s
              else if(settings.unitMeasure == "mm_s"){
              
                // Good threshold
                 if(msg.payload > 0.28 && msg.payload <= 1.12){
                   
                   msg.payload = "good"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 1.12 && msg.payload <= 2.80){
                   
                   msg.payload = "satisfactory"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 2.80 && msg.payload <= 7.10){
                   
                   msg.payload = "unsatisfactory"
                 
                 }
                 
                 // Unaccettable threshold
                 if(msg.payload > 7.10 && msg.payload <= 45.9){
                   
                   msg.payload = "unaccettable"
                 
                 }
              
              }
              
            }
            
            // Class II - Medium machines
            else if(settings.classType == "class_II"){
            
              // Unit measure: in/s
              if(settings.unitMeasure == "in_s"){
              
                // Good threshold
                 if(msg.payload > 0.01 && msg.payload <= 0.07){
                   
                   msg.payload = "good"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 0.07 && msg.payload <= 0.18){
                   
                   msg.payload = "satisfactory"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 0.18 && msg.payload <= 0.44){
                   
                   msg.payload = "unsatisfactory"
                 
                 }
                 
                 // Unaccettable threshold
                 if(msg.payload > 0.44 && msg.payload <= 1.77){
                   
                   msg.payload = "unaccettable"
                 
                 }
              
              }
              
              // Unit measure: mms/s
              else if(settings.unitMeasure == "mm_s"){
              
                // Good threshold
                 if(msg.payload > 0.28 && msg.payload <= 1.80){
                   
                   msg.payload = "good"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 1.80 && msg.payload <= 4.50){
                   
                   msg.payload = "satisfactory"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 4.50 && msg.payload <= 11.2){
                   
                   msg.payload = "unsatisfactory"
                 
                 }
                 
                 // Unaccettable threshold
                 if(msg.payload > 11.2 && msg.payload <= 45.9){
                   
                   msg.payload = "unaccettable"
                 
                 }
              
              }
            
            }
            
            // Class III - Large rigid foundation
            else if(settings.classType == "class_III"){
              
              // Unit measure: in/s
              if(settings.unitMeasure == "in_s"){
              
                // Good threshold
                 if(msg.payload > 0.01 && msg.payload <= 0.11){
                   
                   msg.payload = "good"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 0.11 && msg.payload <= 0.28){
                   
                   msg.payload = "satisfactory"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 0.28 && msg.payload <= 0.70){
                   
                   msg.payload = "unsatisfactory"
                 
                 }
                 
                 // Unaccettable threshold
                 if(msg.payload > 0.70 && msg.payload <= 1.77){
                   
                   msg.payload = "unaccettable"
                 
                 }
                
              }
              
              // Unit measure: mms/s
              else if(settings.unitMeasure == "mm_s"){
              
                // Good threshold
                 if(msg.payload > 0.28 && msg.payload <= 2.80){
                   
                   msg.payload = "good"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 2.80 && msg.payload <= 7.10){
                   
                   msg.payload = "satisfactory"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 7.10 && msg.payload <= 18.0){
                   
                   msg.payload = "unsatisfactory"
                 
                 }
                 
                 // Unaccettable threshold
                 if(msg.payload > 18.0 && msg.payload <= 45.9){
                   
                   msg.payload = "unaccettable"
                 
                 }
              
              }
              
            }
            
            // Class III - Large soft foundation
            if(settings.classType == "class_IV"){
              
              // Unit measure: in/s
              if(settings.unitMeasure == "in_s"){
              
                // Good threshold
                 if(msg.payload > 0.01 && msg.payload <= 0.18){
                   
                   msg.payload = "good"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 0.18 && msg.payload <= 0.44){
                   
                   msg.payload = "satisfactory"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 0.44 && msg.payload <= 1.10){
                   
                   msg.payload = "unsatisfactory"
                 
                 }
                 
                 // Unaccettable threshold
                 if(msg.payload > 1.10 && msg.payload <= 1.77){
                   
                   msg.payload = "unaccettable"
                 
                 }
              
              }
              
              // Unit measure: mms/s
              else if(settings.unitMeasure == "mm_s"){
              
                // Good threshold
                 if(msg.payload > 0.28 && msg.payload <= 4.50){
                   
                   msg.payload = "good"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 4.50 && msg.payload <= 11.2){
                   
                   msg.payload = "satisfactory"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 11.2 && msg.payload <= 28.0){
                   
                   msg.payload = "unsatisfactory"
                 
                 }
                 
                 // Unaccettable threshold
                 if(msg.payload > 28.0 && msg.payload <= 45.9){
                   
                   msg.payload = "unaccettable"
                 
                 }
              
              }
              
            }
            
            node.send(res);
        });
    }
    RED.nodes.registerType("vibration-velocity", velocityNode);
}

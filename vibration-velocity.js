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
                 if(msg.payload >= 0.01 && msg.payload <= 0.03){
                   
                   msg.payload = "good"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 0.03 && msg.payload <= 0.07){
                   
                   msg.payload = "satisfactory"
                 
                 }
                 
                 // Satisfactory threshold
                 if(msg.payload > 0.07 && msg.payload <= 0.18){
                   
                   msg.payload = "unsatisfactory"
                 
                 }
                 
                 // Unaccettable threshold
                 if(msg.payload > 0.18 && msg.payload <= 1.77){
                   
                   msg.payload = "unaccettable"
                 
                 }
                 
              }
              
              // Unit measure: mms/s
              else if(settings.unitMeasure == "in_s"){
              
              }
              
            }
            
            // Class II - Medium machines
            else if(settings.classType == "class_II"){
            
              // Unit measure: in/s
              if(settings.unitMeasure == "in_s"){
              
              }
              
              // Unit measure: mms/s
              else if(settings.unitMeasure == "in_s"){
              
              }
            
            }
            
            // Class III - Large rigid foundation
            else if(settings.classType == "class_III"){
              
              // Unit measure: in/s
              if(settings.unitMeasure == "in_s"){
              
              }
              
              // Unit measure: mms/s
              else if(settings.unitMeasure == "in_s"){
              
              }
              
            }
            
            // Class III - Large soft foundation
            if(settings.classType == "class_IV"){
              
              // Unit measure: in/s
              if(settings.unitMeasure == "in_s"){
              
              }
              
              // Unit measure: mms/s
              else if(settings.unitMeasure == "in_s"){
              
              }
              
            }
            
            node.send(res);
        });
    }
    RED.nodes.registerType("vibration-velocity", velocityNode);
}

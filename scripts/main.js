import FormView from './views/formView';
import {PostCollection} from './models/formModel';

(function(){
  'use strict';

  $(document).ready(function(){
    
  	var posts = new PostCollection();

  	var form = new FormView({collection: posts});

  	$('#app').html(form.el);

  });

})();

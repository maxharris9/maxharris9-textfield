var renderedView;

textFieldSetup = function (text, saveCallback, elementId, editable) {
  var domElement = document.getElementById(elementId);

  var dataContext = {
    saveCallback: saveCallback,
    guid: generateGuid(),
    text: text,
    editable: editable // an external ReactiveVar that sets editability
  };

  renderedView = Blaze.renderWithData(Template.textField, dataContext, domElement);
};

Template.textField.helpers({
  guid: function () {
    var data = Template.instance().data;
    return data.guid;
  },
  text: function () {
    var data = Template.instance().data;
    return data.text;
  },
  remove: function () {
    Blaze.remove(renderedView);
  },
  editable: function () {
    var data = Template.instance().data;
    return data.editable.get() ? 'true' : 'false';
  }
});

Template.textField.events({
  'keyup .editableFieldContents': function (event, template) {
    if (template.data) {
      var element = document.getElementById("contents-text-field-" + template.data.guid);
      if (element) {
        template.data.saveCallback(element.innerText);
      }
    }
  }
});
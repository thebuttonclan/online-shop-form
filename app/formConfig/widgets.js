import Input from 'components/form/Input';
import Select from 'components/form/Select';
import Checkboxes from 'components/form/Checkboxes';
import Radio from 'components/form/Radio';

// See https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/custom-widgets-fields/ for overriding widgets
const widgets = {
  TextWidget: Input,
  SelectWidget: Select,
  RadioWidget: Radio,
  CheckboxesWidget: Checkboxes,
};

export default widgets;

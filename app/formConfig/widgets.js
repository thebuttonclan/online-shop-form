import Input from 'components/form/Input';
import Checkbox from 'components/form/Checkbox';
import Select from 'components/form/Select';

// See https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/custom-widgets-fields/ for overriding widgets
const widgets = {
  TextWidget: Input,
  CheckboxWidget: Checkbox,
  SelectWidget: Select,
};

export default widgets;

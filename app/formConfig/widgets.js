import Input from 'components/form/Input';
import Select from 'components/form/Select';
import Checkbox from 'components/form/Checkbox';

// See https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/custom-widgets-fields/ for overriding widgets
const widgets = {
  TextWidget: Input,
  SelectWidget: Select,
  CheckboxWidget: Checkbox,
};

export default widgets;

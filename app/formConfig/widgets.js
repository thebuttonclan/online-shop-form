import Input from 'components/form/input';
import Checkbox from 'components/form/checkbox';
import Select from 'components/form/select';

// See https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/custom-widgets-fields/ for overriding widgets
const widgets = {
  TextWidget: Input,
  CheckboxWidget: Checkbox,
  SelectWidget: Select,
};

export default widgets;

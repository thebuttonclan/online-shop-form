import Input from 'components/form/Input';
import Select from 'components/form/Select';
import Checkboxes from 'components/form/Checkboxes';
import Radio from 'components/form/Radio';
import Cost from 'components/form/Cost';
import Textarea from 'components/form/Textarea';
import Checkbox from 'components/form/Checkbox';

// See https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/custom-widgets-fields/ for overriding widgets
const widgets = {
  TextWidget: Input,
  SelectWidget: Select,
  RadioWidget: Radio,
  CheckboxWidget: Checkbox,
  Cost: Cost,
  CheckboxesWidget: Checkboxes,
  TextareaWidget: Textarea,
};

export default widgets;

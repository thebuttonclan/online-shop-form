const MAX_SUBMISSION_COUNT = 10000;

let _canSubmit = true;
let _count = -1;

const setApplicationCount = count => {
  _count = count;
  _canSubmit = count < MAX_SUBMISSION_COUNT;
  return _canSubmit;
};

module.exports = {
  setApplicationCount,
  get canSubmit() {
    return _canSubmit;
  },
  get applicationCount() {
    return _count;
  },
};

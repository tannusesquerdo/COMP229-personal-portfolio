const btnUpdate = document.querySelector('#update-contact');
const form = document.querySelector('#form-edit');

btnUpdate.addEventListener('click', e => {
  e.preventDefault();
  btnUpdate.setAttribute('disabled', true);
  var formData = new FormData(form);

  fetch(`${formData.get('_id')}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone')
    })
  }).then(res => {
    if(res.ok) return res.json();
  })
  .then(response => window.location.replace('/dashboard/contacts'))
  .catch(error => {
    console.olog(error);
  })
})
const btnsDelete = document.querySelectorAll('.delete-contact-btn');

btnsDelete.forEach( button => {
  button.onclick = (e) => {
    e.preventDefault();
    const id = button.getAttribute('data-id');
    if (confirm('Are you sure you want to delete this contact from the database?')) {
      fetch(`contacts/${id}`, {
        method: 'DELETE',
      }).then(res => {
        window.location.reload();
      })
    }
  }
});
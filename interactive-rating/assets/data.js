
// function confirmAlert(title, info, icon){
//     console.log(`${title} : ${info} : ${icon}`);
//     Swal.fire(title, info, icon);


async function confirmAlert(icon, title, text) {
    var confirm = false;
    await Swal.fire({
        icon: icon,
        title: title,
        text: text,
        showDenyButton: true,
        denyButtonText: 'ไม่ใช่',
        confirmButtonText: 'ใช่'
    }).then((result) => {
        if (result.isConfirmed) {
            confirm = true;
        }
    });

    return confirm;
}

function contest(){
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      );
}
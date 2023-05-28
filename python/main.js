
// let table = document.getElementById( 'table' );
// const add = document.getElementById( 'add' );
// // form element :
// add.addEventListener( 'click', () => {
//     let name = document.getElementById( 'name' );
//     let user = document.getElementById( 'user' );
//     let age = document.getElementById( 'age' );
//     let note = document.getElementById( 'note' );
//     let tr = document.createElement( 'tr' );
//     let tdname = document.createElement( 'td' );
//     let tduser = document.createElement( 'td' );
//     let tdage = document.createElement( 'td' );
//     let tdnote = document.createElement( 'td' );
//     let tdbtn = document.createElement( 'td' );
//     let state = document.createElement( 'td' );
//     let checkbox = document.createElement( 'input' );
//     checkbox.setAttribute( 'type', 'checkbox' );
//     checkbox.setAttribute( 'class', 'state' );
//     let namet = document.createTextNode( name.value );
//     let usert = document.createTextNode( user.value );
//     let aget = document.createTextNode( age.value );
//     let notet = document.createTextNode( note.value );
//     let btn = document.createElement( 'button' );
//     btn.setAttribute( 'class', 'btn btn-close' );
//     btn.id = 'btn';
//     tdname.appendChild( namet );
//     tduser.appendChild( usert );
//     tdage.appendChild( aget );
//     tdnote.appendChild( notet );
//     tdbtn.appendChild( btn );
//     state.appendChild( checkbox );
//     tr.append( tdname, tduser, tdage, tdnote, tdbtn, state );
//     table.appendChild( tr );

// } );

// table.addEventListener( 'click', ( e ) => {
//     if ( e.target.classList.contains( 'btn-close' ) ) {
//         e.target.closest( 'tr' ).remove();
//     }
// } );
// // when is checked haid the row:
// // table.addEventListener('click',(e)=>{
// //     if(e.target.classList.contains('state')){
// //         e.target.closest('tr').style.display = 'none';
// //     }
// // })
// const hide = document.getElementById( 'hide' );

// hide.addEventListener( 'click', () => {
//     let inputs = document.getElementsByClassName( 'state' );
//     for ( let i = 0; i < inputs.length; i++ ) {
//         let tr = inputs[ i ].closest( 'tr' );
//         if ( !inputs[ i ].checked ) {
//             tr.style.display = 'none';
//         } else {
//             tr.style.display = '';
//         }
//     }
// } );
// //  sort alphabeticlie the rows by names : 
// const sort = document.getElementById( 'sort' );
// sort.addEventListener( 'click', () => {
//     const rows = Array.from( table.rows ).slice( 1 ); // get all rows except the header row
//     rows.sort( ( a, b ) => {
//         const cellA = a.cells[ 0 ].textContent.trim();
//         const cellB = b.cells[ 0 ].textContent.trim();
//         if ( cellA < cellB ) {
//             return -1;
//         }
//         if ( cellA > cellB ) {
//             return 1;
//         }
//         return 0;
//     } );
//     rows.forEach( row => table.appendChild( row ) ); // append the sorted rows back to the table
// } );

// // highlights some rows :
// let highlights = document.getElementById( 'hgh' );
// highlights.addEventListener( 'click', () => {
//     for ( let i = 1; i < table.rows.length; i++ ) {
//         let notCell = parseInt( table.rows[ i ].cells[ 3 ].textContent );
//         if ( notCell > 10 ) {
//             table.rows[ i ].style.backgroundColor = 'green';
//         } else {
//             table.rows[ i ].style.background = 'transparent';
//         }
//     }
// } );

// // // Add a button that, when clicked, shows a summary of the data in the table (e.g. total number of rows, average value of a specified column)

// const summary = document.getElementById( 'summary' );

// summary.addEventListener( 'click', () => {
//     let averageNotes = 0;
//     for ( let i = 1; i < table.rows.length; i++ ) {
//         let notCell = parseInt( table.rows[ i ].cells[ 3 ].textContent.trim() );
//         averageNotes += notCell;
//     }
//     console.log( averageNotes / ( table.rows.length - 1 ) );

// } )


let newDate = new Date("1999-04-29T05:55:05");
console.log(newDate);


















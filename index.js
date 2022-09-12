let userform=document.getElementById("user-form");
const retrieveEntries=()=>{
    let entries=localstotage.getItem("user-entries");
    if(entries=) {
        entries=JSON.parse(entries);
    }else{
        entries=[];
    }
}
let userEntries=retrieveEntries();
const displayEntries=()=>{
    const entries=retrieveEntries();
    const tableEntries = entries.map((entry)=>{
        const nameCell=<td class='border px=4 py=2'>$(entry.name)</td>;
        const emailCell=<td class='border px=4 py=2'>$(entry.email)</td>;
        const passwordCell=<td class='border px=4 py=2'>$(entry.password)</td>;
        const ageCell=<td class='border px=4 py=2'>$(entry.age)</td>;
        const accepttermsCell=<td class='border px=4 py=2'>$(entry.acceptterms)</td>;
        
        const row=<tr>${nameCel} ${emailCell} ${passwordCell} ${ageCell} ${accepttermsCell}</tr>
    }).join("\n");

    const table=<table class="table-auto w-full"><tr>
        <th class="px=4 py=2">NAME</th>
        <th class="px=4 py=2">EMAIL</th>
        <th class="px=4 py=2">PASSWORD</th>
        <th class="px=4 py=2">age</th>
        <th class="px=4 py=2">ACCEPTED TERMA?</th>
    </tr>${tableEntries}</table>;

    let details=document.getElementById("user-entries");
    details.innerHTML=table;
}
const saveUserForm=(event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const age=document.getElementById("age").value;
    const acceptterms=document.getElementById("accept terms").checked;

    const entry={
        name,
        email,
        password,
        age,
        acceptterms,
    };
    userEntries.push(entry);
    localStorage.setItem("user-entries",JSON.stringify((userEntries));
    displayEntries();
}
userform.addEventListener("submit",saveUserForm);
displayEntries();
document.addEventListener('DOMContentLoaded', function() {
    const supirForm = document.getElementById('supirForm');
    const supirTable = document.getElementById('supirTable');
    let nextId = 1;

    const dataSupir = [
        { id: generateId("Ferdi Anak Sehat", "l", "24-05-2004"), nama: 'Ferdi Anak Sehat', tgl_lahir: '24-05-2004', jenis_kelamin: 'l', alamat: 'sidoarjo' },
        { id: generateId("Bejo bintang 5", "p", "02-02-2030"), nama: 'Bejo bintang 5', tgl_lahir: '02-02-2030', jenis_kelamin: 'p', alamat: 'bojong gede' }
    ];

    function renderSupir() {
        supirTable.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Tanggal Lahir</th>
                <th>Jenis Kelamin</th>
                <th>Alamat</th>
                <th>Aksi</th>
            </tr>
        `;
        dataSupir.forEach(supir => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${supir.id}</td>
                <td>${supir.nama}</td>
                <td>${supir.tgl_lahir}</td>
                <td>${supir.jenis_kelamin}</td>
                <td>${supir.alamat}</td>
                <td>
                    <button class="btn" onclick="editSupir(${supir.id})">Edit</button>
                    <button class="btn" onclick="hapusSupir(${supir.id})">Hapus</button>
                </td>
            `;
            supirTable.appendChild(tr);
        });
    }

    renderSupir();

    supirForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nama = document.getElementById('nama').value;
        const tgl_lahir = document.getElementById('tgl_lahir').value;
        const jenis_kelamin = document.getElementById('jenis_kelamin').value;
        const alamat = document.getElementById('alamat').value;
        const id = generateId(nama, jenis_kelamin, tgl_lahir);
        const supir = { id, nama, tgl_lahir, jenis_kelamin, alamat };
        dataSupir.push(supir);
        renderSupir();
        supirForm.reset();
    });

    window.hapusSupir = function(id) {
        const index = dataSupir.findIndex(supir => supir.id === id);
        if (index !== -1) {
            dataSupir.splice(index, 1);
            renderSupir();
        }
    };

    window.editSupir = function(id) {
        const index = dataSupir.findIndex(supir => supir.id === id);
        if (index !== -1) {
            const supir = dataSupir[index];
            document.getElementById('nama').value = supir.nama;
            document.getElementById('tgl_lahir').value = supir.tgl_lahir;
            document.getElementById('jenis_kelamin').value = supir.jenis_kelamin;
            document.getElementById('alamat').value = supir.alamat;
            dataSupir.splice(index, 1);
            renderSupir();
        }
    };

    function generateId(nama, jenis_kelamin, tgl_lahir) {
        let id = (nama.charCodeAt(0) > nama.charCodeAt(nama.length - 1)) ? (nama.charCodeAt(0) - nama.charCodeAt(nama.length - 1)) : (nama.charCodeAt(nama.length - 1) - nama.charCodeAt(0));
        id = id * 10 + (jenis_kelamin === 'l' ? 1 : 0);
        
        const tgl = tgl_lahir.split('-');
        const tanggal = parseInt(tgl[0]) + parseInt(tgl[1]) + parseInt(tgl[2]);

        id = id * 100 + tanggal % 9;
        return id;
    }
});

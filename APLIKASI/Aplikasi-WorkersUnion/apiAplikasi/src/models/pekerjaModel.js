const pool = require('../config/database');
const bcrypt=require('bcrypt');
const {v4:uuidv4}=require('uuid');

class pekerjaModel {
  static async createPekerja(username, email, password, callback) {
    try {
      const salt = await bcrypt.genSalt(9);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const query = 'INSERT INTO pekerja (username, email, password) VALUES (?, ?, ?)';
      const values = [username, email, hashedPassword];
  
      pool.query(query, values, (error, results) => {
        if (typeof callback === 'function') {
          if (error) {
            return callback(error, null);
          }
          callback(null, results);
        } else {
          console.error("Callback is not a function:", callback);
        }
      });
    } catch (error) {
      if (typeof callback === 'function') {
        callback(error, null);
      } else {
        console.error("Callback is not a function:", callback);
      }
    }
  }

  static ambilSemuaPekerja(callback) {
    const query = 'SELECT * FROM pekerja';
  
    pool.query(query, (error, results) => {
      if (typeof callback === 'function') {
        if (error) {
          return callback(error, null);
        }
        callback(null, results);
      } else {
        console.error("Callback is not a function:", callback);
      }
    });
  }
  
  static ambilPekerjaByEmail(email, callback) {
    const query = 'SELECT * FROM pekerja WHERE email=?';
    const values = [email];
    console.log("Searching for email:", email);

    pool.query(query, values, (error, results) => {
      if (typeof callback === 'function') {
        if (error) {
          return callback(error, null);
        }
        callback(null, results);
      } else {
        console.error("Callback is not a function:", callback);
      }
    });
  }

  static async logIn(email, password) {
    const query = 'SELECT * FROM pekerja WHERE email=?';
    const values = [email];

    return new Promise((resolve, reject) => {
        pool.query(query, values, async (error, results) => {
            if (error) {
                return reject(error); // Handle database error
            }

            if (results.length === 0) {
                return resolve(false); // No user found
            }

            const user = results[0]; // Get the first result
            const isPasswordValid = await bcrypt.compare(password, user.password); // Compare passwords

            if (!isPasswordValid) {
                return resolve(false); // Password doesn't match
            }

            resolve(user); // User verified
        });
    });
  }
  static ambilPekerjaById(idPekerja, callback) {
    const query = 'SELECT * FROM pekerja WHERE idPekerja = ?';
    const values = [idPekerja];

    pool.query(query, values, (error, results) => {
      if (typeof callback === 'function') {
        if (error) {
          return callback(error, null);
        }
        callback(null, results);
      } else {
        console.error("Callback is not a function:", callback);
      }
    });
  }
  
  static addRingkasan(idPekerja, ringkasan, callback) {
    const query = 'UPDATE pekerja SET ringkasan = ? WHERE idPekerja=?;';
    const values = [ringkasan, idPekerja];

    pool.query(query, values, (error, results) => {
      if (typeof callback === 'function') {
        if (error) {
          return callback(error, null);
        }
        callback(null, results);
      } else {
        console.error("Callback is not a function:", callback);
      }
    });
  }

  static addInformasiPekerjaan(idPekerja, posisiPekerjaan, namaPerusahaan, tahunMulaiPekerjaan, tahunBerakhirPekerjaan, statusJabatanPekerjaan, deskripsiPekerjaan, callback) {
    const formattedTahunMulai = `${tahunMulaiPekerjaan}-05-05`;
    const formattedTahunBerakhir = `${tahunBerakhirPekerjaan}-05-05`;
    const query = 'UPDATE pekerja SET posisiPekerjaan = ?, namaPerusahaan = ?, tahunMulaiPekerjaan = ?, tahunBerakhirPekerjaan = ?, statusJabatanPekerjaan = ?, deskripsiPekerjaan = ? WHERE idPekerja=?;';
    const values = [posisiPekerjaan, namaPerusahaan, formattedTahunMulai, formattedTahunBerakhir, statusJabatanPekerjaan, deskripsiPekerjaan, idPekerja];

    pool.query(query, values, (error, results) => {
      if (typeof callback === 'function') {
        if (error) {
          return callback(error, null);
        }
        callback(null, results);
      } else {
        console.error("Callback is not a function:", callback);
      }
    });
  }

  static addInformasiPendidikan(idPekerja, kursusPendidikan, lembagaPendidikan, statusKualifikasiPendidikan, tahunSelesaiPendidikan, poinPentingPendidikan, callback) {
    const formattedTahunSelesai = `${tahunSelesaiPendidikan}-05-05`;
    const query = 'UPDATE pekerja SET kursusPendidikan=?, lembagaPendidikan=?, statusKualifikasiPendidikan=?, tahunSelesaiPendidikan=?, poinPentingPendidikan=? WHERE idPekerja=?;';
    const values = [kursusPendidikan, lembagaPendidikan, statusKualifikasiPendidikan, formattedTahunSelesai, poinPentingPendidikan, idPekerja];

    pool.query(query, values, (error, results) => {
      if (typeof callback === 'function') {
        if (error) {
          return callback(error, null);
        }
        callback(null, results);
      } else {
        console.error("Callback is not a function:", callback);
      }
    });
  }

  static addInformasiLisensi(idPekerja, namaLisensi, organisasiPenerbitLisensi, tanggalTerbitLisensi, tanggalKadaluwarsaLisensi, statusLisensi, deskripsiLisensi, callback) {
    const query = 'UPDATE pekerja SET namaLisensi=?, organisasiPenerbitLisensi=?, tanggalTerbitLisensi=?, tanggalKadaluwarsaLisensi=?, statusLisensi=?, deskripsiLisensi=? WHERE idPekerja=?;';
    const values = [namaLisensi, organisasiPenerbitLisensi, tanggalTerbitLisensi, tanggalKadaluwarsaLisensi, statusLisensi, deskripsiLisensi, idPekerja];

    pool.query(query, values, (error, results) => {
      if (typeof callback === 'function') {
        if (error) {
          return callback(error, null);
        }
        callback(null, results);
      } else {
        console.error("Callback is not a function:", callback);
      }
    });
  }
  static addSkills(idPekerja, skills, callback) {
    const query = `
            INSERT INTO skill (idPekerja, skill)
            VALUES ${skills.map(() => "(?, ?)").join(", ")}
            ON DUPLICATE KEY UPDATE skill = VALUES(skill);
        `;

        const values = skills.flatMap(skill => [idPekerja, skill]);

        pool.query(query, values, (error, results) => {
            if (error) {
                return callback(error, null);
            }
            callback(null, results);
        });
  }
  static getSkills(idPekerja, callback) {
    const query = "SELECT skill FROM skill WHERE idPekerja = ?";
    pool.query(query, [idPekerja], (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results);
    });
  }

  static deleteSkills(idPekerja, callback) {
    const query = "DELETE FROM skill WHERE idPekerja=?;";
    pool.query(query, [idPekerja], (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results);
    });
  }  
}

module.exports = pekerjaModel;
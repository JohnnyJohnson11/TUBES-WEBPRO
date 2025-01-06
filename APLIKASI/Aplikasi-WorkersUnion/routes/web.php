<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PekerjaController;
use App\Http\Controllers\PerusahaanController;

Route::get('/',[PekerjaController::class, 'halamanUtamaIndex'])->name('workersunion.halamanUtama');
Route::get('/daftar', [PekerjaController::class, 'daftarIndex'])->name('workersunion.daftarIndex');
Route::post('/daftar/create', [PekerjaController::class, 'store'])->name('workersunion.storePekerja');
Route::post('/checkEmail', [PekerjaController::class, 'checkEmail'])->name('workersunion.checkEmail');
Route::get('/login', [PekerjaController::class, 'loginIndex'])->name('workersunion.loginIndex');
Route::post('/login/verify', [PekerjaController::class, 'logIn'])->name('workersunion.logIn');
Route::get('/home-page',[PekerjaController::class, 'homeIndex'])->name('workersunion.homePage');
Route::get('/profile', [PekerjaController::class, 'profileIndex'])->name('workersunion.profilePage');
Route::post('/addRingkasan', [PekerjaController::class, 'addRingkasan'])->name('workersunion.addRingkasan');
Route::post('/addInformasiPekerjaan', [PekerjaController::class, 'addInformasiPekerjaan'])->name('workersunion.addInformasiPekerjaan');
Route::post('/addInformasiPendidikan', [PekerjaController::class, 'addInformasiPendidikan'])->name('workersunion.addInformasiPendidikan');
Route::post('/addInformasiLisensi', [PekerjaController::class, 'addInformasiLisensi'])->name('workersunion.addInformasiLisensi');
Route::post('/addSkills', [PekerjaController::class, 'addSkills'])->name('workersunion.addSkills');
Route::post('/getSkills', [PekerjaController::class, 'getSkills'])->name('workersunion.getSkills');
Route::post('/deleteSkills',[PekerjaController::class, 'deleteSkills'])->name('workersunion.deleteSkills');
Route::post('/addBahasa',[PekerjaController::class, 'addBahasa'])->name('workersunion.addBahasa');
Route::post('/uploadResume',[PekerjaController::class, 'uploadResume'])->name('workersunion.uploadResume');
Route::get('/halamanUtamaPerusahaan',[PekerjaController::class, 'halamanUtamaPerusahaanIndex'])->name('workersunion.halamanUtamaPerusahaan');
Route::post('/checkEmailPerusahaan',[PerusahaanController::class, 'checkEmailPerusahaan'])->name('workersunion.checkEmailPerusahaan');
Route::post('/storePerusahaan',[PerusahaanController::class, 'storePerusahaan'])->name('workersunion.storePerusahaan');
Route::get('/daftarPerusahaan', [PerusahaanController::class, 'daftarPerusahaanIndex'])->name('workersunion.daftarPerusahaanIndex');
Route::get('/loginPerusahaan', [PerusahaanController::class, 'loginPerusahaanIndex'])->name('workersunion.logInPerusahaanIndex');
Route::post('/loginPerusahaan/verify',[PerusahaanController::class, 'logInPerusahaan'])->name('workersunion.logInPerusahaan');
Route::get('/homepagePerusahaan',[PerusahaanController::class, 'homepagePerusahaanIndex'])->name('workersunion.homepagePerusahaanIndex');
Route::get('/postingPekerjaanPage1',[PerusahaanController::class, 'postingPekerjaanPage1'])->name('workersunion.postingPekerjaanPage1');
Route::post('/postingPekerjaanStorePage1',[PerusahaanController::class, 'postingPekerjaanStorePage1'])->name('workersunion.postingPekerjaanStorePage1');
Route::get('/postingPekerjaanPage2',[PerusahaanController::class, 'postingPekerjaanPage2'])->name('workersunion.postingPekerjaanPage2');
Route::get('/postingPekerjaanPage3',[PerusahaanController::class, 'postingPekerjaanPage3'])->name('workersunion.postingPekerjaanPage3');
Route::post('/postingPekerjaanStorePage3',[PerusahaanController::class, 'postingPekerjaanStorePage3'])->name('workersunion.postingPekerjaanStorePage3');
Route::get('/postingPekerjaanPage4',[PerusahaanController::class, 'postingPekerjaanPage4'])->name('workersunion.postingPekerjaanPage4');
Route::post('/postingPekerjaanStorePage4',[PerusahaanController::class, 'postingPekerjaanStorePage4'])->name('workersunion.postingPekerjaanStorePage4');
Route::get('/postingPekerjaanPage5',[PerusahaanController::class, 'postingPekerjaanPage5'])->name('workersunion.postingPekerjaanPage5');
Route::post('/uploadPekerjaan',[PerusahaanController::class, 'uploadPekerjaan'])->name('workersunion.uploadPekerjaan');
Route::post('/getPekerjaan',[PerusahaanController::class, 'getPekerjaan'])->name('workersunion.getPekerjaan');
Route::get('/akunPerusahaanIndex',[PerusahaanController::class, 'akunPerusahaanIndex'])->name('workersunion.akunPerusahaanIndex');
Route::post('/updatePerusahaan',[PerusahaanController::class, 'updatePerusahaan'])->name('workersunion.updatePerusahaan');
Route::get('/lihatPekerjaan',[PekerjaController::class,'lihatPekerjaan'])->name('workersunion.lihatPekerjaan');
Route::post('/getPekerjaanById',[PerusahaanController::class, 'getPekerjaanById'])->name('workersunion.getPekerjaanById');
Route::post('/storeJobSession', [PerusahaanController::class, 'storeJobSession'])->name('workersunion.storeJobSession');
Route::get('/halamanResume',[PerusahaanController::class,'halamanResume'])->name('workersunion.halamanResume');
Route::post('/lamarPekerjaanStorePage1',[PekerjaController::class, 'lamarPekerjaanStorePage1'])->name('workersunion.lamarPekerjaanStorePage1');
Route::get('/lamarPekerjaanPage2',[PekerjaController::class,'lamarPekerjaanPage2'])->name('workersunion.lamarPekerjaanPage2');
Route::get('/lamarPekerjaanPage3',[PekerjaController::class,'lamarPekerjaanPage3'])->name('workersunion.lamarPekerjaanPage3');
Route::post('/updatePekerja',[PekerjaController::class, 'updatePekerja'])->name('workersunion.updatePekerja');
Route::post('/createLamaran',[PekerjaController::class, 'createLamaran'])->name('workersunion.createLamaran');
Route::get('/lamarPekerjaanPage4',[PekerjaController::class,'lamarPekerjaanPage4'])->name('workersunion.lamarPekerjaanPage4');
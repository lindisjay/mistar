import CardCourse from "@/components/CardCourse";

export default function Course() {
  return (
    <>
      <h3 className="text-lg font-semibold">Jelajahi Semua Pelajaran Kami</h3>

      <h3 className="pt-10 font-bold text-orange-500 text-center md:text-left">Tajwid</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 pt-5 gap-5 justify-center">
        <CardCourse>Tajwid I</CardCourse>
        <CardCourse>Tajwid II</CardCourse>
      </div>

      <h3 className="pt-10 font-bold text-orange-500 text-center md:text-left">Sirah</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 pt-5 gap-5 justify-center">
        <CardCourse>Sebelum Wahyu</CardCourse>
        <CardCourse>Periode Mekah</CardCourse>
        <CardCourse>Periode Madinah</CardCourse>
      </div>

      <h3 className="pt-10 font-bold text-orange-500 text-center md:text-left">Bahasa Arab</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 pt-5 gap-5 justify-center">
        <CardCourse>Durusul Lughah I</CardCourse>
        <CardCourse>Drursul Lughah II</CardCourse>
        <CardCourse>Drursul Lughah III</CardCourse>
        <CardCourse>Drursul Lughah IV</CardCourse>
      </div>
    </>
  );
}


import React from 'react';
import { BookOpen, Plus, Search, Tag, Users, Clock } from 'lucide-react';
import { MOCK_COURSES } from '../../../constants';

const AdminCourses: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <BookOpen className="text-primary" /> Kurs & Paket Yönetimi
            </h1>
            <p className="text-gray-500 text-sm">Aktif eğitim programları ve müfredat içerikleri.</p>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-lg hover:bg-primary-light flex items-center gap-2">
            <Plus size={18} /> Yeni Paket Ekle
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-50 flex items-center gap-4">
              <div className="relative flex-1">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" placeholder="Kurs adı ile ara..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-0" />
              </div>
          </div>
          <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-400 uppercase text-[10px] font-bold border-b border-gray-100">
                  <tr>
                      <th className="px-6 py-4">Kurs Adı</th>
                      <th className="px-6 py-4 text-center">Öğrenci</th>
                      <th className="px-6 py-4 text-center">Grup</th>
                      <th className="px-6 py-4 text-center">Ücret</th>
                      <th className="px-6 py-4 text-right">Durum</th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                  {MOCK_COURSES.map((course) => (
                      <tr key={course.id} className="hover:bg-gray-50/50">
                          <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                                      <img src={course.image} className="w-full h-full object-cover" />
                                  </div>
                                  <div>
                                      <div className="font-bold text-gray-900">{course.title}</div>
                                      <div className="text-[10px] text-gray-400 uppercase font-bold">{course.stream}</div>
                                  </div>
                              </div>
                          </td>
                          <td className="px-6 py-4 text-center font-bold text-gray-700">24</td>
                          <td className="px-6 py-4 text-center">
                              <span className="text-xs bg-gray-100 px-2 py-1 rounded-lg text-gray-600 font-medium">{course.grade === 'Mezun' ? 'Mezun' : `${course.grade}. Sınıf`}</span>
                          </td>
                          <td className="px-6 py-4 text-center font-bold text-primary">{course.price.toLocaleString('tr-TR')} ₺</td>
                          <td className="px-6 py-4 text-right">
                              <span className="px-2 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-bold">Açık</span>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
    </div>
  );
};

export default AdminCourses;

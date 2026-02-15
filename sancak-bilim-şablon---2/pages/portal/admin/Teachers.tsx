
import React from 'react';
import { GraduationCap, UserPlus, Search, Mail, Phone, MoreVertical } from 'lucide-react';
import { MOCK_TEACHERS } from '../../../constants';

const AdminTeachers: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <GraduationCap className="text-primary" /> Öğretmen Kadrosu
            </h1>
            <p className="text-gray-500 text-sm">Akademik kadro ve branş yönetimi.</p>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary-light flex items-center gap-2">
            <UserPlus size={18} /> Yeni Öğretmen
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_TEACHERS.map((teacher) => (
              <div key={teacher.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>
                  
                  <div className="flex items-center gap-4 mb-6">
                      <img src={teacher.image} alt={teacher.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary/10" />
                      <div>
                          <h3 className="font-bold text-gray-900 text-lg">{teacher.name}</h3>
                          <div className="text-xs text-primary font-bold uppercase tracking-widest">{teacher.branch}</div>
                      </div>
                      <button className="ml-auto p-2 text-gray-300 hover:text-gray-600"><MoreVertical size={18} /></button>
                  </div>

                  <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Mail size={16} className="text-gray-400" /> demo@sancak.com
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Phone size={16} className="text-gray-400" /> 0500 000 00 00
                      </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Uzmanlık: {teacher.subject}</div>
                      <button className="text-xs font-bold text-primary hover:underline">Dosyayı Gör</button>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};

export default AdminTeachers;

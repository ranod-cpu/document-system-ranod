import React, { useState, useEffect } from "react";

const Icon = ({ type, className = "w-5 h-5" }) => {
  const icons = {
    home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    file: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    send: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
    check: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    settings:
      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    bell: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
    logout:
      "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
    download: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
    users:
      "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    clipboard:
      "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  };

  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={icons[type] || icons.file}
      />
    </svg>
  );
};

const DocumentManagementSystem = () => {
  const [currentPage, setCurrentPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const sampleDocs = [
      {
        id: "1",
        type: "received",
        title: "หนังสือแจ้งกำหนดการประชุมผู้บริหาร",
        date: "2025-11-01",
        documentNumber: "ศธ 0456/2568",
        sender: "สำนักงานเขตพื้นที่การศึกษา",
        status: "approved",
        confidentiality: "ปกติ",
      },
      {
        id: "2",
        type: "sent",
        title: "รายงานผลการดำเนินงานประจำเดือน",
        date: "2025-11-02",
        documentNumber: "ศพด.001/2568",
        receiver: "สำนักงานเขตพื้นที่การศึกษา",
        status: "pending",
        confidentiality: "ปกติ",
      },
      {
        id: "3",
        type: "order",
        title: "คำสั่งแต่งตั้งคณะกรรมการดำเนินงาน",
        date: "2025-11-03",
        documentNumber: "คส.010/2568",
        status: "approved",
        confidentiality: "ปกติ",
      },
    ];
    setDocuments(sampleDocs);

    addNotification("ยินดีต้อนรับสู่ระบบสารบรรณอิเล็กทรอนิกส์");
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage("dashboard");
    addNotification("เข้าสู่ระบบสำเร็จ");
  };

  const addNotification = (message) => {
    const notification = {
      id: Date.now().toString(),
      message,
      timestamp: new Date().toISOString(),
    };
    setNotifications((prev) => [notification, ...prev]);
  };

  const getStats = () => {
    return {
      received: documents.filter((d) => d.type === "received").length,
      sent: documents.filter((d) => d.type === "sent").length,
      order: documents.filter((d) => d.type === "order").length,
      pending: documents.filter((d) => d.status === "pending").length,
      approved: documents.filter((d) => d.status === "approved").length,
    };
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-yellow-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            {/* โลโก้ ศพด. */}
            <div className="flex justify-center mb-4">
              <img
                src="https://i.imgur.com/your-logo-id.png"
                alt="โลโก้ ศพด."
                className="w-24 h-24 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "block";
                }}
              />
              <div
                className="w-24 h-24 bg-gradient-to-br from-purple-500 to-yellow-500 rounded-full flex items-center justify-center"
                style={{ display: "none" }}
              >
                <Icon type="file" className="w-12 h-12 text-white" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-600 mb-2">
              ศูนย์ส่งเสริมการเรียนรู้
              <br />
              ระดับอำเภอระโนด
            </h1>
            <p className="text-purple-600 font-medium">
              ระบบสารบรรณอิเล็กทรอนิกส์
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ชื่อผู้ใช้
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="กรอกชื่อผู้ใช้"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                รหัสผ่าน
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="กรอกรหัสผ่าน"
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-purple-600 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-yellow-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </div>
    );
  }

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-purple-500 to-yellow-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                <Icon type="file" className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold">
                  ศูนย์ส่งเสริมการเรียนรู้ระดับอำเภอระโนด
                </h1>
                <p className="text-sm text-purple-100">
                  ระบบสารบรรณอิเล็กทรอนิกส์
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 hover:bg-white/20 rounded-lg transition"
              >
                <Icon type="bell" className="w-6 h-6" />
                {notifications.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {notifications.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setCurrentPage("login");
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition"
              >
                <Icon type="logout" className="w-5 h-5" />
                <span className="hidden sm:inline">ออกจากระบบ</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg min-h-screen">
          <nav className="p-4 space-y-2">
            {[
              { id: "dashboard", icon: "home", label: "หน้าหลัก" },
              { id: "received", icon: "file", label: "หนังสือรับ" },
              { id: "sent", icon: "send", label: "หนังสือส่ง" },
              { id: "order", icon: "clipboard", label: "หนังสือคำสั่ง" },
              { id: "meeting", icon: "users", label: "รายงานประชุม" },
              { id: "approval", icon: "check", label: "อนุมัติเอกสาร" },
              { id: "search", icon: "search", label: "ค้นหาเอกสาร" },
              { id: "settings", icon: "settings", label: "การตั้งค่า" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                  currentPage === item.id
                    ? "bg-gradient-to-r from-purple-500 to-yellow-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-purple-50"
                }`}
              >
                <Icon type={item.icon} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {currentPage === "dashboard" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">แดชบอร์ด</h2>
                  <p className="text-gray-600 mt-1">ภาพรวมระบบสารบรรณ</p>
                </div>
                <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-yellow-500 text-white rounded-lg hover:shadow-lg transition">
                  <Icon type="download" />
                  <span>ส่งออกข้อมูล</span>
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-600 text-sm mb-1">หนังสือรับ</p>
                      <p className="text-3xl font-bold text-gray-800">
                        {stats.received}
                      </p>
                    </div>
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Icon type="file" className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-600 text-sm mb-1">หนังสือส่ง</p>
                      <p className="text-3xl font-bold text-gray-800">
                        {stats.sent}
                      </p>
                    </div>
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <Icon type="send" className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-600 text-sm mb-1">
                        หนังสือคำสั่ง
                      </p>
                      <p className="text-3xl font-bold text-gray-800">
                        {stats.order}
                      </p>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Icon
                        type="clipboard"
                        className="w-6 h-6 text-blue-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-600 text-sm mb-1">รออนุมัติ</p>
                      <p className="text-3xl font-bold text-gray-800">
                        {stats.pending}
                      </p>
                    </div>
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Icon type="file" className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-600 text-sm mb-1">อนุมัติแล้ว</p>
                      <p className="text-3xl font-bold text-gray-800">
                        {stats.approved}
                      </p>
                    </div>
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Icon type="check" className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Documents */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Icon type="file" className="w-6 h-6 mr-2 text-purple-600" />
                  เอกสารล่าสุด
                </h3>
                <div className="space-y-3">
                  {documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-yellow-50 rounded-lg hover:shadow-md transition"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-white rounded-lg shadow">
                          <Icon
                            type="file"
                            className="w-5 h-5 text-purple-600"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">
                            {doc.title}
                          </p>
                          <p className="text-sm text-gray-500">
                            {doc.documentNumber} •{" "}
                            {new Date(doc.date).toLocaleDateString("th-TH")}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          doc.status === "approved"
                            ? "bg-green-100 text-green-700"
                            : doc.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {doc.status === "approved"
                          ? "อนุมัติ"
                          : doc.status === "pending"
                          ? "รอดำเนินการ"
                          : "ปฏิเสธ"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentPage !== "dashboard" && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-600 mb-4">
                {currentPage === "received"
                  ? "จัดการหนังสือรับ"
                  : currentPage === "sent"
                  ? "จัดการหนังสือส่ง"
                  : currentPage === "order"
                  ? "จัดการหนังสือคำสั่ง"
                  : currentPage === "meeting"
                  ? "จัดการรายงานการประชุม"
                  : currentPage === "approval"
                  ? "อนุมัติเอกสาร"
                  : currentPage === "search"
                  ? "ค้นหาเอกสาร"
                  : currentPage === "settings"
                  ? "การตั้งค่า"
                  : "หน้าอื่นๆ"}
              </h2>
              <p className="text-gray-600">
                ฟีเจอร์นี้พร้อมใช้งาน - สามารถพัฒนาเพิ่มเติมได้
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DocumentManagementSystem;

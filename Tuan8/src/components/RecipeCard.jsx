
import { FiBookmark } from "react-icons/fi"; // Dùng react-icons cho nút lưu

export default function RecipeCard({
  title,
  time,
  imageUrl,
  onClick,
  isPremium = false,
  isLocked = false,
}) {
  const safeImageUrl =
    imageUrl && !imageUrl.includes("LINK_")
      ? imageUrl
      : "https://placehold.co/600x400/fdf2f8/db2777?text=Recipe+Image";

  return (
    <div
      onClick={onClick}
      className="border border-gray-100 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-pointer"
    >
      {/* Khung chứa ảnh */}
      <div className="w-full h-48 bg-gray-50 p-4 relative">
        <img
          src={safeImageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-xl shadow-sm"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/600x400/f3f4f6/9ca3af?text=Image+Unavailable";
          }}
        />
        {isPremium ? (
          <span className="absolute top-6 left-6 bg-black/70 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
            Subscribers only
          </span>
        ) : null}
      </div>

      {/* Nội dung Card */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-bold text-gray-800 text-sm leading-snug line-clamp-2">
            {title}
          </h3>
          <button className="text-pink-400 hover:text-pink-600 bg-pink-50 p-1.5 rounded-full transition-colors flex-shrink-0">
            <FiBookmark size={18} />
          </button>
        </div>

        {/* Đẩy thời gian xuống dưới cùng nếu tên món ăn ngắn */}
        <div className="mt-auto pt-2">
          <span className="inline-block bg-pink-50 text-pink-500 text-[11px] font-semibold px-2.5 py-1 rounded-md">
            {time}
          </span>
          {isLocked ? (
            <span className="inline-block ml-2 bg-amber-50 text-amber-600 text-[11px] font-semibold px-2.5 py-1 rounded-md">
              Subscribe to view
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

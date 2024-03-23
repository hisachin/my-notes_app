"use client";

const Spinner = () => {

    return <div className="grid gap-4">
        {[...Array(12)].map((x) => <div key={x} className="h-12 max-w-xs bg-slate-200 rounded-lg shadow-sm cursor-pointer">
            <div className="px-4 py-2">
                <h3 className="text-sm font-bold text-gray-800 mb-2"></h3>
                <p className="text-sm text-gray-600"></p>
            </div>
        </div>)}
    </div>;
};

export default Spinner;
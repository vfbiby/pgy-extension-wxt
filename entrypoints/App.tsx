function App() {
  const onMessageListener = (e: any) => {
    console.log("Content script 收到消息:", e.detail);
  };
  useEffect(() => {
    window.addEventListener("FROM_INJECTED", onMessageListener, false);
    return () => {
      window.removeEventListener("FROM_INJECTED", onMessageListener);
    };
  }, []);
  return (
    <div className="fixed top-1/2 right-0 z-[999] p-2">
      <button className="border border-gray-500 p-2 rounded-md">
        显示数据表格
      </button>
    </div>
  );
}

export default App;

function App() {
  const [selectedRoom, setSelectedRoom] = useState("");

  return (
    <div className="container">
      <h1 className="text-center my-4">Szobafoglaltság lekérdezés</h1>

      <div className="mb-4 text-center">
        <label htmlFor="roomSelect" className="form-label">Válassz szobát:</label>
        <select
          id="roomSelect"
          className="form-select w-auto mx-auto"
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
        >
          <option value="">-- Válassz --</option>
          <option value="101">101</option>
          <option value="102">102</option>
          <option value="103">103</option>
        </select>
      </div>

      <TablazatSzoba selectedRoom={selectedRoom} />
    </div>
  );
}

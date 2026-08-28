const RidesSection = () => {
  return (
    <section id="services" className="rides-section">
      <h2 className="rides-title">Rides Tailored for Every Journey</h2>

      <div className="rides-grid">

        <div className="ride-card">
          <div className="ride-info">
            <h3>Activa</h3>
            <p>
              Beat traffic,
              <br />
              ride quicker
            </p>
          </div>

          <img
            src="/assets/services/activa.png"
            alt="Activa"
            className="ride-image activa-image"
          />
        </div>

        <div className="ride-card">
          <div className="ride-info">
            <h3>Auto</h3>
            <p>
              Everyday autos,
              <br />
              made easy
            </p>
          </div>

          <img
            src="/assets/services/auto.png"
            alt="Auto"
            className="ride-image auto-image"
          />
        </div>

        <div className="ride-card">
          <div className="ride-info">
            <h3>E-Rickshaw</h3>
            <p>
              Eco-friendly
              <br />
              group hops
            </p>
          </div>

          <img
            src="/assets/services/E-Rickshaw.png"
            alt="E-Rickshaw"
            className="ride-image erickshaw-image"
          />
        </div>

        <div className="ride-card">
          <div className="ride-info">
            <h3>Cab</h3>
            <p>
              Comfort for
              <br />
              every journey
            </p>
          </div>

          <img
            src="/assets/services/cab.png"
            alt="Cab"
            className="ride-image cab-image"
          />
        </div>

      </div>

      {/* Read More button removed */}
    </section>
  );
};

export default RidesSection;
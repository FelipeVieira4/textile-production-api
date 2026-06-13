-- ==============================================
--  Sistema de Registro de Produção de Teares
--  Script de inicialização do banco de dados
-- ==============================================

CREATE TABLE IF NOT EXISTS producoes (
  id            SERIAL PRIMARY KEY,
  data_producao DATE          NOT NULL,
  numero_tear   VARCHAR(20)   NOT NULL,
  codigo_produto VARCHAR(30)  NOT NULL,
  turno         INTEGER       NOT NULL CHECK (turno IN (1, 2, 3)),
  qualidade     VARCHAR(1)    NOT NULL CHECK (qualidade IN ('A', 'B', 'C')),
  quilos        DECIMAL(10,2) NOT NULL CHECK (quilos > 0),
  pecas         INTEGER       NOT NULL CHECK (pecas > 0),
  created_at    TIMESTAMP     DEFAULT NOW()
);

-- Dados iniciais para facilitar os testes
INSERT INTO producoes (data_producao, numero_tear, codigo_produto, turno, qualidade, quilos, pecas) VALUES
  ('2026-04-20', 'T-001', 'MAL-001', 1, 'A', 8.50,  275),
  ('2026-04-20', 'T-002', 'MAL-001', 1, 'A', 7.80,  252),
  ('2026-04-20', 'T-003', 'MAL-002', 2, 'B', 6.20,  200),
  ('2026-04-20', 'T-004', 'MAL-002', 2, 'A', 9.10,  294),
  ('2026-04-20', 'T-005', 'MAL-003', 3, 'C', 5.40,  175),
  ('2026-04-21', 'T-001', 'MAL-001', 1, 'A', 8.90,  288),
  ('2026-04-21', 'T-002', 'MAL-003', 2, 'B', 7.10,  230),
  ('2026-04-21', 'T-003', 'MAL-001', 3, 'A', 8.30,  269),
  ('2026-04-21', 'T-004', 'MAL-002', 1, 'B', 6.70,  217),
  ('2026-04-21', 'T-005', 'MAL-003', 2, 'A', 9.40,  304);

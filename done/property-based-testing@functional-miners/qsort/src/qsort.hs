import Test.QuickCheck
import Data.List

-- Funkcyjna implementacja sortowania szybkiego:
qsort :: Ord a => [a] -> [a]
qsort []     = []
qsort (x:xs) = qsort lhs ++ [x] ++ qsort rhs
  where lhs = filter  (< x) xs
        rhs = filter (>= x) xs

-- Nasza pierwsza własność - długość tablicy po sortowaniu
-- jest identyczna jak przed sortowaniem:
prop_length xs =
  length xs == length (qsort xs)

-- Kolejna własność - idempotentność, podwójne posortowanie
-- jest tożsame z wielokrotnym:
prop_idempotency xs =
  qsort (qsort xs) == qsort xs

-- Kolejna własność - po sortowaniu pierwszy
-- element jest jednocześnie najmniejszym:
--
-- Zawiera ukryty błąd - dla [] własność nie jest prawdziwa.
prop_minimum xs =
  head (qsort xs) == minimum xs

-- Kolejna własność - po sortowaniu ostatni
-- element jest jednocześnie największym:
--
-- Zawiera ukryty błąd - dla [] własność nie jest prawdziwa.
prop_maximum xs =
  last (qsort xs) == maximum xs

-- Poprawna własność dot. minimum:
prop_minimum' xs =
  not (null xs) ==> head (qsort xs) == minimum xs

-- Poprawna własność dot. maximum:
prop_maximum' xs =
  not (null xs) ==> last (qsort xs) == maximum xs

-- Testowanie w oparciu o zupełnie inny model:
prop_sort_model xs =
  sort xs == qsort xs

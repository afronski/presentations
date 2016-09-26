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
prop_first_element_is_the_minimum_after_sorting xs =
  head (qsort xs) == minimum xs

def calculate_discount(price: float, discount_percent: float) -> float:
    """
    Menghitung harga akhir setelah diskon.
    :param price: Harga awal
    :param discount_percent: Persentase diskon (0 - 100)
    :return: Harga setelah diskon
    """
    if discount_percent < 0 or discount_percent > 100:
        raise ValueError("Persentase diskon harus antara 0 dan 100")
    if price < 0:
        raise ValueError("Harga tidak boleh negatif")
    
    discount_amount = price * (discount_percent / 100.0)
    return price - discount_amount

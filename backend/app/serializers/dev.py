def decodeDev(dev) -> dict:
    return {
        '_id': str(dev["_id"]),
        'nome': dev["nome"],
        'cidade': dev["cidade"],
        'profissao': dev["profissao"],
        'tecnologias': dev["tecnologias"],
        'avatar': dev["avatar"],
        'data_criacao': dev["data_criacao"]
    }

# todos os desenvolvedores

def decodeDevs(devs) -> list:
    return [decodeDev(dev) for dev in devs]
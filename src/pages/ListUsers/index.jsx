import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import Button from "../../components/Button";
import { AvataUser, CardUsers, Container, ContainerUser, Title, TrashIcon } from "./styles";
import Trash from "../../assets/trash.svg"
import TopBackground from "../../components/TopBackground";

function ListUsers() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get('/usuarios')
      setUsers(data)
    }
    getUsers()
  }, [])

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)

    const updatedUsers = users.filter(user => user.id !== id)

    setUsers(updatedUsers)
  }

  return (
    <Container>
      <TopBackground />
      <Title>Lista de Usuários</Title>

      <ContainerUser>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvataUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt="icone-lixeira" onClick={() => deleteUsers(user.id)}/>
          </CardUsers>
        ))}
      </ContainerUser>

      <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
    </Container>
  );
}

export default ListUsers;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import { Container, NewPlaylist, Nav } from "./styles";

import Loading from "../../components/Loading";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

class Siderbar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          loading: PropTypes.boolean
        })
      )
    }).isRequired
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <a href="#Radio">Rádio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="#Daily">Seu Daily Mix</a>
            </li>
            <li>
              <a href="#Playeds">Tocados Recentemente</a>
            </li>
            <li>
              <a href="#Musics">Músicas</a>
            </li>
            <li>
              <a href="#Albuns">Álbums</a>
            </li>
            <li>
              <a href="#Artists">Artistas</a>
            </li>
            <li>
              <a href="#Locals">Arquivos Locais</a>
            </li>
            <li>
              <a href="#PodCasts">PodCasts</a>
            </li>
            <li>
              <a href="#Stations">Estações</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLISTS </span>
              {this.props.playlists.loading && <Loading />}
            </li>
            {this.props.playlists.data.map(playlists => (
              <li key={playlists.id}>
                <Link to={`/playlist/${playlists.id}`}>{playlists.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Siderbar);

import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators } from '@angular/forms';
import {DnsCheckService} from '../dns-check.service';
import {ActivatedRoute} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { saveAs } from 'file-saver';

const response = {"result":{"hash_id":"9682fd2c966b7c9d","id":503526,"creation_time":"2017-10-30 14:30:14.267462","params":{"domain":".","client_id":"Zonemaster Dancer Frontend","user_location_info":{"isp":"AFNIC (Association Francaise pour le Nommage Inter","country":"France","city":"Montigny-le-Bretonneux","longitude":2.0333,"latitude":48.7667},"ipv6":true,"user_ip":"192.134.7.106","profile":"default_profile","client_version":"1.0.6","ipv4":true},"results":[{"message":"Utilisation de la version v1.0.16 du moteur Zonemaster.\n","module":"SYSTEM","level":"INFO"},{"message":"La configuration a été lue depuis le fichier DEFAULT CONFIGURATION\n","module":"SYSTEM","level":"INFO"},{"module":"SYSTEM","message":"La politique a été lue depuis le fichier DEFAULT POLICY\n","level":"INFO"},{"level":"INFO","module":"BASIC","message":"Les serveurs de noms de la zone . répondent lorsque l'on essaye de récupérer la liste des serveurs de noms de la zone testée.\n"},{"module":"BASIC","message":"Le serveur de noms pour la zone . renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","level":"INFO"},{"message":"IPv4 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur a.root-servers.net/198.41.0.4.\n","module":"BASIC","level":"INFO"},{"module":"BASIC","message":"Une requête NS sur le serveur de noms a.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","level":"INFO"},{"module":"BASIC","message":"IPv6 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur a.root-servers.net.\n","level":"INFO"},{"level":"INFO","module":"BASIC","message":"Une requête NS sur le serveur de noms a.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n"},{"module":"BASIC","message":"IPv4 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur b.root-servers.net/199.9.14.201.\n","level":"INFO"},{"message":"Une requête NS sur le serveur de noms b.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","module":"BASIC","level":"INFO"},{"level":"INFO","module":"BASIC","message":"IPv6 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur b.root-servers.net.\n"},{"module":"BASIC","message":"Une requête NS sur le serveur de noms b.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","level":"INFO"},{"module":"BASIC","message":"IPv4 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur c.root-servers.net/192.33.4.12.\n","level":"INFO"},{"level":"INFO","module":"BASIC","message":"Une requête NS sur le serveur de noms c.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n"},{"level":"INFO","message":"IPv6 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur c.root-servers.net.\n","module":"BASIC"},{"level":"INFO","module":"BASIC","message":"Une requête NS sur le serveur de noms c.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n"},{"level":"INFO","message":"IPv4 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur d.root-servers.net/199.7.91.13.\n","module":"BASIC"},{"message":"Une requête NS sur le serveur de noms d.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","module":"BASIC","level":"INFO"},{"message":"IPv6 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur d.root-servers.net.\n","module":"BASIC","level":"INFO"},{"level":"INFO","message":"Une requête NS sur le serveur de noms d.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","module":"BASIC"},{"message":"IPv4 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur e.root-servers.net/192.203.230.10.\n","module":"BASIC","level":"INFO"},{"module":"BASIC","message":"Une requête NS sur le serveur de noms e.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","level":"INFO"},{"level":"INFO","message":"IPv6 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur e.root-servers.net.\n","module":"BASIC"},{"module":"BASIC","message":"Une requête NS sur le serveur de noms e.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","level":"INFO"},{"message":"IPv4 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur f.root-servers.net/192.5.5.241.\n","module":"BASIC","level":"INFO"},{"level":"INFO","message":"Une requête NS sur le serveur de noms f.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","module":"BASIC"},{"level":"INFO","module":"BASIC","message":"IPv6 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur f.root-servers.net.\n"},{"level":"INFO","message":"Une requête NS sur le serveur de noms f.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","module":"BASIC"},{"level":"INFO","module":"BASIC","message":"IPv4 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur g.root-servers.net/192.112.36.4.\n"},{"module":"BASIC","message":"Une requête NS sur le serveur de noms g.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","level":"INFO"},{"module":"BASIC","message":"IPv6 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur g.root-servers.net.\n","level":"INFO"},{"level":"INFO","module":"BASIC","message":"Une requête NS sur le serveur de noms g.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n"},{"level":"INFO","message":"IPv4 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur h.root-servers.net/198.97.190.53.\n","module":"BASIC"},{"level":"INFO","module":"BASIC","message":"Une requête NS sur le serveur de noms h.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n"},{"level":"INFO","message":"IPv6 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur h.root-servers.net.\n","module":"BASIC"},{"level":"INFO","module":"BASIC","message":"Une requête NS sur le serveur de noms h.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n"},{"module":"BASIC","message":"IPv4 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur i.root-servers.net/192.36.148.17.\n","level":"INFO"},{"message":"Une requête NS sur le serveur de noms i.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","module":"BASIC","level":"INFO"},{"level":"INFO","module":"BASIC","message":"IPv6 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur i.root-servers.net.\n"},{"level":"INFO","message":"Une requête NS sur le serveur de noms i.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","module":"BASIC"},{"level":"INFO","message":"IPv4 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur j.root-servers.net/192.58.128.30.\n","module":"BASIC"},{"level":"INFO","message":"Une requête NS sur le serveur de noms j.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","module":"BASIC"},{"level":"INFO","module":"BASIC","message":"IPv6 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur j.root-servers.net.\n"},{"module":"BASIC","message":"Une requête NS sur le serveur de noms j.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","level":"INFO"},{"level":"INFO","module":"BASIC","message":"IPv4 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur k.root-servers.net/193.0.14.129.\n"},{"level":"INFO","module":"BASIC","message":"Une requête NS sur le serveur de noms k.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n"},{"message":"IPv6 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur k.root-servers.net.\n","module":"BASIC","level":"INFO"},{"message":"Une requête NS sur le serveur de noms k.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","module":"BASIC","level":"INFO"},{"level":"INFO","module":"BASIC","message":"IPv4 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur l.root-servers.net/199.7.83.42.\n"},{"level":"INFO","message":"Une requête NS sur le serveur de noms l.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","module":"BASIC"},{"level":"INFO","module":"BASIC","message":"IPv6 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur l.root-servers.net.\n"},{"module":"BASIC","message":"Une requête NS sur le serveur de noms l.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","level":"INFO"},{"level":"INFO","module":"BASIC","message":"IPv6 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur m.root-servers.net.\n"},{"level":"INFO","message":"Une requête NS sur le serveur de noms m.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","module":"BASIC"},{"message":"IPv4 est activé,  il est possible de réaliser une requête de type \"NS\" sur le serveur m.root-servers.net/202.12.27.33.\n","module":"BASIC","level":"INFO"},{"module":"BASIC","message":"Une requête NS sur le serveur de noms m.root-servers.net renvoie la liste de serveurs de noms suivants: a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net..\n","level":"INFO"},{"level":"INFO","message":"Un serveur de noms fonctionnel a été trouvé. Inutile de réaliser une requête de type \"A\" sur www...\n","module":"BASIC"},{"message":"Toutes les adresses IP des serveurs de noms sont dans l'espace d'adresses publiques routables.\n","module":"ADDRESS","level":"INFO"},{"level":"WARNING","message":"Le serveur de noms h.root-servers.net a une adresse IP (198.97.190.53) sans enregistrement \"PTR\" correspondant.\n","module":"ADDRESS"},{"module":"CONNECTIVITY","message":"Le serveur de noms a.root-servers.net/198.41.0.4 est accessible via UDP sur le port 53.\n","level":"INFO"},{"module":"CONNECTIVITY","message":"Le serveur de noms a.root-servers.net/2001:503:ba3e::2:30 est accessible via UDP sur le port 53.\n","level":"INFO"},{"module":"CONNECTIVITY","message":"Le serveur de noms b.root-servers.net/199.9.14.201 est accessible via UDP sur le port 53.\n","level":"INFO"},{"level":"INFO","message":"Le serveur de noms b.root-servers.net/2001:500:200::b est accessible via UDP sur le port 53.\n","module":"CONNECTIVITY"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms c.root-servers.net/192.33.4.12 est accessible via UDP sur le port 53.\n"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms c.root-servers.net/2001:500:2::c est accessible via UDP sur le port 53.\n"},{"module":"CONNECTIVITY","message":"Le serveur de noms d.root-servers.net/199.7.91.13 est accessible via UDP sur le port 53.\n","level":"INFO"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms d.root-servers.net/2001:500:2d::d est accessible via UDP sur le port 53.\n"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms e.root-servers.net/192.203.230.10 est accessible via UDP sur le port 53.\n"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms e.root-servers.net/2001:500:a8::e est accessible via UDP sur le port 53.\n"},{"module":"CONNECTIVITY","message":"Le serveur de noms f.root-servers.net/192.5.5.241 est accessible via UDP sur le port 53.\n","level":"INFO"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms f.root-servers.net/2001:500:2f::f est accessible via UDP sur le port 53.\n"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms g.root-servers.net/192.112.36.4 est accessible via UDP sur le port 53.\n"},{"message":"Le serveur de noms g.root-servers.net/2001:500:12::d0d est accessible via UDP sur le port 53.\n","module":"CONNECTIVITY","level":"INFO"},{"message":"Le serveur de noms h.root-servers.net/198.97.190.53 est accessible via UDP sur le port 53.\n","module":"CONNECTIVITY","level":"INFO"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms h.root-servers.net/2001:500:1::53 est accessible via UDP sur le port 53.\n"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms i.root-servers.net/192.36.148.17 est accessible via UDP sur le port 53.\n"},{"level":"INFO","message":"Le serveur de noms i.root-servers.net/2001:7fe::53 est accessible via UDP sur le port 53.\n","module":"CONNECTIVITY"},{"level":"INFO","message":"Le serveur de noms j.root-servers.net/192.58.128.30 est accessible via UDP sur le port 53.\n","module":"CONNECTIVITY"},{"level":"INFO","message":"Le serveur de noms j.root-servers.net/2001:503:c27::2:30 est accessible via UDP sur le port 53.\n","module":"CONNECTIVITY"},{"level":"INFO","message":"Le serveur de noms k.root-servers.net/193.0.14.129 est accessible via UDP sur le port 53.\n","module":"CONNECTIVITY"},{"module":"CONNECTIVITY","message":"Le serveur de noms k.root-servers.net/2001:7fd::1 est accessible via UDP sur le port 53.\n","level":"INFO"},{"module":"CONNECTIVITY","message":"Le serveur de noms l.root-servers.net/199.7.83.42 est accessible via UDP sur le port 53.\n","level":"INFO"},{"level":"INFO","message":"Le serveur de noms l.root-servers.net/2001:500:9f::42 est accessible via UDP sur le port 53.\n","module":"CONNECTIVITY"},{"module":"CONNECTIVITY","message":"Le serveur de noms m.root-servers.net/2001:dc3::35 est accessible via UDP sur le port 53.\n","level":"INFO"},{"module":"CONNECTIVITY","message":"Le serveur de noms m.root-servers.net/202.12.27.33 est accessible via UDP sur le port 53.\n","level":"INFO"},{"message":"Le serveur de noms b.root-servers.net/192.228.79.201 est accessible via UDP sur le port 53.\n","module":"CONNECTIVITY","level":"INFO"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms h.root-servers.net/128.63.2.53 est accessible via UDP sur le port 53.\n"},{"module":"CONNECTIVITY","message":"Le serveur de noms h.root-servers.net/2001:500:1::803f:235 est accessible via UDP sur le port 53.\n","level":"INFO"},{"message":"Le serveur de noms l.root-servers.net/2001:500:3::42 est accessible via UDP sur le port 53.\n","module":"CONNECTIVITY","level":"INFO"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms a.root-servers.net/198.41.0.4 est accessible via TCP sur le port 53.\n"},{"level":"INFO","message":"Le serveur de noms a.root-servers.net/2001:503:ba3e::2:30 est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms b.root-servers.net/199.9.14.201 est accessible via TCP sur le port 53.\n"},{"message":"Le serveur de noms b.root-servers.net/2001:500:200::b est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY","level":"INFO"},{"message":"Le serveur de noms c.root-servers.net/192.33.4.12 est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY","level":"INFO"},{"module":"CONNECTIVITY","message":"Le serveur de noms c.root-servers.net/2001:500:2::c est accessible via TCP sur le port 53.\n","level":"INFO"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms d.root-servers.net/199.7.91.13 est accessible via TCP sur le port 53.\n"},{"message":"Le serveur de noms d.root-servers.net/2001:500:2d::d est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY","level":"INFO"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms e.root-servers.net/192.203.230.10 est accessible via TCP sur le port 53.\n"},{"level":"INFO","message":"Le serveur de noms e.root-servers.net/2001:500:a8::e est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY"},{"message":"Le serveur de noms f.root-servers.net/192.5.5.241 est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY","level":"INFO"},{"module":"CONNECTIVITY","message":"Le serveur de noms f.root-servers.net/2001:500:2f::f est accessible via TCP sur le port 53.\n","level":"INFO"},{"message":"Le serveur de noms g.root-servers.net/192.112.36.4 est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY","level":"INFO"},{"level":"INFO","message":"Le serveur de noms g.root-servers.net/2001:500:12::d0d est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY"},{"level":"INFO","message":"Le serveur de noms h.root-servers.net/198.97.190.53 est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY"},{"level":"INFO","message":"Le serveur de noms h.root-servers.net/2001:500:1::53 est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY"},{"level":"INFO","message":"Le serveur de noms i.root-servers.net/192.36.148.17 est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms i.root-servers.net/2001:7fe::53 est accessible via TCP sur le port 53.\n"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms j.root-servers.net/192.58.128.30 est accessible via TCP sur le port 53.\n"},{"message":"Le serveur de noms j.root-servers.net/2001:503:c27::2:30 est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY","level":"INFO"},{"message":"Le serveur de noms k.root-servers.net/193.0.14.129 est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY","level":"INFO"},{"module":"CONNECTIVITY","message":"Le serveur de noms k.root-servers.net/2001:7fd::1 est accessible via TCP sur le port 53.\n","level":"INFO"},{"module":"CONNECTIVITY","message":"Le serveur de noms l.root-servers.net/199.7.83.42 est accessible via TCP sur le port 53.\n","level":"INFO"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms l.root-servers.net/2001:500:9f::42 est accessible via TCP sur le port 53.\n"},{"level":"INFO","message":"Le serveur de noms m.root-servers.net/2001:dc3::35 est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY"},{"level":"INFO","message":"Le serveur de noms m.root-servers.net/202.12.27.33 est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY"},{"level":"INFO","message":"Le serveur de noms b.root-servers.net/192.228.79.201 est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY"},{"level":"INFO","message":"Le serveur de noms h.root-servers.net/128.63.2.53 est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY"},{"message":"Le serveur de noms h.root-servers.net/2001:500:1::803f:235 est accessible via TCP sur le port 53.\n","module":"CONNECTIVITY","level":"INFO"},{"level":"INFO","module":"CONNECTIVITY","message":"Le serveur de noms l.root-servers.net/2001:500:3::42 est accessible via TCP sur le port 53.\n"},{"module":"CONNECTIVITY","message":"Les serveurs de noms ont des adresses IPv4 dans les AS suivants: 20144, 7500, 1508, 21556, 3557, 2149, 29216, 10886, 25152, 36619, 36620, 36622, 36625, 10578, 20431, 26415, 36617, 36623, 36632, 5927, 394353.\n","level":"INFO"},{"message":"Les serveurs de noms ont des adresses IPv6 dans les AS suivants: 25152, 1508, 3557, 394353, 2149, 29216, 21556, 5927, 10886, 7500, 26415, 36625, 20144.\n","module":"CONNECTIVITY","level":"INFO"},{"level":"INFO","module":"CONNECTIVITY","message":"Les serveurs de noms pour le nom de domaine ne se trouvent pas tous dans le même AS.\n"},{"module":"CONSISTENCY","message":"Un unique numéro de série a été trouvé dans les enregistrements de type \"SOA\" de la zone testée (2017103000).\n","level":"INFO"},{"message":"Une unique adresse mail a été trouvée dans les enregistrements de type \"SOA\" de la zone testée (nstld.verisign-grs.com.).\n","module":"CONSISTENCY","level":"INFO"},{"module":"CONSISTENCY","message":"Un unique ensemble de paramètres temporels a été trouvé (REFRESH=1800, RETRY=900, EXPIRE=604800, MINIMUM=86400).\n","level":"INFO"},{"level":"INFO","message":"Un unique ensemble de serveurs de noms est configuré sur les serveurs de la zone testée (a.root-servers.net., b.root-servers.net., c.root-servers.net., d.root-servers.net., e.root-servers.net., f.root-servers.net., g.root-servers.net., h.root-servers.net., i.root-servers.net., j.root-servers.net., k.root-servers.net., l.root-servers.net., m.root-servers.net.).\n","module":"CONSISTENCY"},{"message":"Les serveurs de noms de la zone parente retournent des adresses IP pour les serveurs de nom de la zone qui ne sont pas connues par les serveurs de noms de la zone (198.97.190.53; 199.9.14.201; 2001:500:12::d0d; 2001:500:1::53; 2001:500:200::b; 2001:500:2::c; 2001:500:9f::42; 2001:500:a8::e).\n","module":"CONSISTENCY","level":"NOTICE"},{"message":"Les serveurs de noms de la zone retournent des adresses IP pour les serveurs de nom de la zone qui ne sont pas connues par les serveurs de noms de la zone parente (128.63.2.53; 192.228.79.201; 2001:500:1::803f:235; 2001:500:3::42).\n","module":"CONSISTENCY","level":"NOTICE"},{"message":"Les serveurs de noms de la zone retournent un enregistrement de type \"DNSKEY\",  mais aucun enregistrement de type \"DS\" n'a été trouvé dans la zone parente.\n","module":"DNSSEC","level":"WARNING"},{"message":"Le serveur de noms 198.41.0.4 ne retourne aucun enregistrement de type \"DS\" pour la zone ..\n","module":"DNSSEC","level":"NOTICE"},{"message":"La signature (RRSIG) avec la clé de tag 19036 et couvrant les enregistrements de type(s) \"DNSKEY\" expire à la date suivante : Sat Nov 11 00:00:00 2017.\n","module":"DNSSEC","level":"INFO"},{"module":"DNSSEC","message":"La signature (RRSIG) avec la clé de tag 46809 et couvrant les enregistrements de type(s) \"SOA\" expire à la date suivante : Sun Nov 12 14:00:00 2017.\n","level":"INFO"},{"message":"La clé (DNSKEY) avec le tag 46809 utilise un numéro d'algorithme correct 8/(RSA/SHA-256).\n","module":"DNSSEC","level":"INFO"},{"message":"La clé (DNSKEY) avec le tag 19036 utilise un numéro d'algorithme correct 8/(RSA/SHA-256).\n","module":"DNSSEC","level":"INFO"},{"module":"DNSSEC","message":"La clé (DNSKEY) avec le tag 20326 utilise un numéro d'algorithme correct 8/(RSA/SHA-256).\n","level":"INFO"},{"module":"DNSSEC","message":"La zone a des enregistrements de type \"NSEC\".\n","level":"INFO"},{"module":"DNSSEC","message":"L'enregistrement DS dans la zone parente n'est pas correctement signé: no_ds.\n","level":"NOTICE"},{"level":"INFO","module":"DELEGATION","message":"Les serveurs de noms de la zone parente retournent suffisamment de serveurs (13) faisant autorité (a.root-servers.net; b.root-servers.net; c.root-servers.net; d.root-servers.net; e.root-servers.net; f.root-servers.net; g.root-servers.net; h.root-servers.net; i.root-servers.net; j.root-servers.net; k.root-servers.net; l.root-servers.net; m.root-servers.net). La limite inférieure étant fixée à 2.\n"},{"module":"DELEGATION","message":"Les serveurs de noms de la zone retournent suffisamment de serveurs (13) faisant autorité (a.root-servers.net; b.root-servers.net; c.root-servers.net; d.root-servers.net; e.root-servers.net; f.root-servers.net; g.root-servers.net; h.root-servers.net; i.root-servers.net; j.root-servers.net; k.root-servers.net; l.root-servers.net; m.root-servers.net). La limite inférieure étant fixée à 2.\n","level":"INFO"},{"module":"DELEGATION","message":"Les serveurs de noms de la zone parente et les serveurs de noms de la zone retournent suffisamment de serveurs (13) faisant autorité (a.root-servers.net; b.root-servers.net; c.root-servers.net; d.root-servers.net; e.root-servers.net; f.root-servers.net; g.root-servers.net; h.root-servers.net; i.root-servers.net; j.root-servers.net; k.root-servers.net; l.root-servers.net; m.root-servers.net). La limite inférieure étant fixée à 2.\n","level":"INFO"},{"module":"DELEGATION","message":"Toutes les adresses IP utilisées par les serveurs de noms sont uniques.\n","level":"INFO"},{"module":"DELEGATION","message":"La plus petite taille d'un paquet légal contenant une référence (referral) est inférieure à 513 octets (elle est de 482).\n","level":"INFO"},{"level":"INFO","message":"Ces serveurs de noms ont pu être vérifiés comme faisant autorité : a.root-servers.net, b.root-servers.net, c.root-servers.net, d.root-servers.net, e.root-servers.net, f.root-servers.net, g.root-servers.net, h.root-servers.net, i.root-servers.net, j.root-servers.net, k.root-servers.net, l.root-servers.net, m.root-servers.net.\n","module":"DELEGATION"},{"message":"Aucun serveur de noms ne pointe sur un alias (CNAME).\n","module":"DELEGATION","level":"INFO"},{"level":"INFO","module":"DELEGATION","message":"Tous les serveurs de noms retournent un enregistrement de type \"SOA\".\n"},{"message":"Tous les serveurs de noms de la zone font partie de la liste des serveurs de noms retournés par les serveurs de noms de la zone parente ainsi que par les serveurs de noms de la zone elle-même.\n","module":"DELEGATION","level":"INFO"},{"message":"Aucun des serveurs de noms suivants n'est récursif : a.root-servers.net, b.root-servers.net, c.root-servers.net, d.root-servers.net, e.root-servers.net, f.root-servers.net, g.root-servers.net, h.root-servers.net, i.root-servers.net, j.root-servers.net, k.root-servers.net, l.root-servers.net, m.root-servers.net.\n","module":"NAMESERVER","ns":"All","level":"INFO"},{"module":"NAMESERVER","message":"Les serveurs de noms suivants supportent EDNS0 : b.root-servers.net/199.9.14.201, j.root-servers.net/192.58.128.30, b.root-servers.net/192.228.79.201, k.root-servers.net/193.0.14.129, m.root-servers.net/2001:dc3::35, f.root-servers.net/192.5.5.241, g.root-servers.net/2001:500:12::d0d, d.root-servers.net/2001:500:2d::d, e.root-servers.net/192.203.230.10, i.root-servers.net/192.36.148.17, j.root-servers.net/2001:503:c27::2:30, h.root-servers.net/2001:500:1::53, k.root-servers.net/2001:7fd::1, l.root-servers.net/2001:500:3::42, a.root-servers.net/2001:503:ba3e::2:30, c.root-servers.net/192.33.4.12, f.root-servers.net/2001:500:2f::f, e.root-servers.net/2001:500:a8::e, i.root-servers.net/2001:7fe::53, b.root-servers.net/2001:500:200::b, g.root-servers.net/192.112.36.4, h.root-servers.net/198.97.190.53, h.root-servers.net/128.63.2.53, h.root-servers.net/2001:500:1::803f:235, l.root-servers.net/2001:500:9f::42, l.root-servers.net/199.7.83.42, d.root-servers.net/199.7.91.13, c.root-servers.net/2001:500:2::c, m.root-servers.net/202.12.27.33, a.root-servers.net/198.41.0.4.\n","level":"INFO","ns":"All"},{"level":"INFO","ns":"a.root-servers.net","module":"NAMESERVER","message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms a.root-servers.net/198.41.0.4.\n"},{"ns":"a.root-servers.net","level":"INFO","message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms a.root-servers.net/2001:503:ba3e::2:30.\n","module":"NAMESERVER"},{"message":"Il est possible de réaliser un transfert de zone depuis le serveur de noms b.root-servers.net/199.9.14.201.\n","module":"NAMESERVER","level":"NOTICE","ns":"b.root-servers.net"},{"message":"Il est possible de réaliser un transfert de zone depuis le serveur de noms b.root-servers.net/2001:500:200::b.\n","module":"NAMESERVER","ns":"b.root-servers.net","level":"NOTICE"},{"message":"Il est possible de réaliser un transfert de zone depuis le serveur de noms c.root-servers.net/192.33.4.12.\n","module":"NAMESERVER","ns":"c.root-servers.net","level":"NOTICE"},{"module":"NAMESERVER","message":"Il est possible de réaliser un transfert de zone depuis le serveur de noms c.root-servers.net/2001:500:2::c.\n","ns":"c.root-servers.net","level":"NOTICE"},{"module":"NAMESERVER","message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms d.root-servers.net/199.7.91.13.\n","level":"INFO","ns":"d.root-servers.net"},{"ns":"d.root-servers.net","level":"INFO","module":"NAMESERVER","message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms d.root-servers.net/2001:500:2d::d.\n"},{"level":"INFO","ns":"e.root-servers.net","module":"NAMESERVER","message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms e.root-servers.net/192.203.230.10.\n"},{"ns":"e.root-servers.net","level":"INFO","message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms e.root-servers.net/2001:500:a8::e.\n","module":"NAMESERVER"},{"message":"Il est possible de réaliser un transfert de zone depuis le serveur de noms f.root-servers.net/192.5.5.241.\n","module":"NAMESERVER","level":"NOTICE","ns":"f.root-servers.net"},{"message":"Il est possible de réaliser un transfert de zone depuis le serveur de noms f.root-servers.net/2001:500:2f::f.\n","module":"NAMESERVER","ns":"f.root-servers.net","level":"NOTICE"},{"ns":"g.root-servers.net","level":"NOTICE","module":"NAMESERVER","message":"Il est possible de réaliser un transfert de zone depuis le serveur de noms g.root-servers.net/192.112.36.4.\n"},{"ns":"g.root-servers.net","level":"NOTICE","module":"NAMESERVER","message":"Il est possible de réaliser un transfert de zone depuis le serveur de noms g.root-servers.net/2001:500:12::d0d.\n"},{"ns":"h.root-servers.net","level":"INFO","module":"NAMESERVER","message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms h.root-servers.net/198.97.190.53.\n"},{"module":"NAMESERVER","message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms h.root-servers.net/2001:500:1::53.\n","level":"INFO","ns":"h.root-servers.net"},{"message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms i.root-servers.net/192.36.148.17.\n","module":"NAMESERVER","ns":"i.root-servers.net","level":"INFO"},{"ns":"i.root-servers.net","level":"INFO","module":"NAMESERVER","message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms i.root-servers.net/2001:7fe::53.\n"},{"ns":"j.root-servers.net","level":"INFO","message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms j.root-servers.net/192.58.128.30.\n","module":"NAMESERVER"},{"message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms j.root-servers.net/2001:503:c27::2:30.\n","module":"NAMESERVER","ns":"j.root-servers.net","level":"INFO"},{"module":"NAMESERVER","message":"Il est possible de réaliser un transfert de zone depuis le serveur de noms k.root-servers.net/193.0.14.129.\n","ns":"k.root-servers.net","level":"NOTICE"},{"message":"Il est possible de réaliser un transfert de zone depuis le serveur de noms k.root-servers.net/2001:7fd::1.\n","module":"NAMESERVER","ns":"k.root-servers.net","level":"NOTICE"},{"ns":"l.root-servers.net","level":"INFO","module":"NAMESERVER","message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms l.root-servers.net/199.7.83.42.\n"},{"module":"NAMESERVER","message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms l.root-servers.net/2001:500:9f::42.\n","level":"INFO","ns":"l.root-servers.net"},{"ns":"m.root-servers.net","level":"INFO","message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms m.root-servers.net/2001:dc3::35.\n","module":"NAMESERVER"},{"level":"INFO","ns":"m.root-servers.net","message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms m.root-servers.net/202.12.27.33.\n","module":"NAMESERVER"},{"level":"NOTICE","ns":"b.root-servers.net","module":"NAMESERVER","message":"Il est possible de réaliser un transfert de zone depuis le serveur de noms b.root-servers.net/192.228.79.201.\n"},{"message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms h.root-servers.net/128.63.2.53.\n","module":"NAMESERVER","ns":"h.root-servers.net","level":"INFO"},{"module":"NAMESERVER","message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms h.root-servers.net/2001:500:1::803f:235.\n","ns":"h.root-servers.net","level":"INFO"},{"ns":"l.root-servers.net","level":"INFO","message":"Il n'est pas  possible de réaliser un transfert de zone depuis le serveur de noms l.root-servers.net/2001:500:3::42.\n","module":"NAMESERVER"},{"module":"NAMESERVER","message":"Tous les serveurs de noms répondent avec la même adresse IP que celle utilisée lors de leur requêtage.\n","level":"INFO","ns":"All"},{"module":"NAMESERVER","message":"Les serveurs de noms suivants répondent correctement aux requêtes de type \"AAAA\" : c.root-servers.net/192.33.4.12, a.root-servers.net/2001:503:ba3e::2:30, l.root-servers.net/2001:500:3::42, h.root-servers.net/2001:500:1::53, k.root-servers.net/2001:7fd::1, j.root-servers.net/2001:503:c27::2:30, i.root-servers.net/192.36.148.17, e.root-servers.net/192.203.230.10, d.root-servers.net/2001:500:2d::d, g.root-servers.net/2001:500:12::d0d, f.root-servers.net/192.5.5.241, m.root-servers.net/2001:dc3::35, k.root-servers.net/193.0.14.129, b.root-servers.net/192.228.79.201, b.root-servers.net/199.9.14.201, j.root-servers.net/192.58.128.30, a.root-servers.net/198.41.0.4, m.root-servers.net/202.12.27.33, c.root-servers.net/2001:500:2::c, l.root-servers.net/199.7.83.42, d.root-servers.net/199.7.91.13, l.root-servers.net/2001:500:9f::42, h.root-servers.net/2001:500:1::803f:235, h.root-servers.net/128.63.2.53, h.root-servers.net/198.97.190.53, g.root-servers.net/192.112.36.4, i.root-servers.net/2001:7fe::53, b.root-servers.net/2001:500:200::b, e.root-servers.net/2001:500:a8::e, f.root-servers.net/2001:500:2f::f.\n","level":"INFO","ns":"All"},{"ns":"All","level":"INFO","message":"Il a été possible de trouver au moins une adresse IP pour tous les serveurs de noms.\n","module":"NAMESERVER"},{"level":"INFO","ns":"All","message":"Upward referral tests skipped for root zone.\n","module":"NAMESERVER"},{"ns":"a.root-servers.net","level":"INFO","module":"NAMESERVER","message":"Le serveur de noms a.root-servers.net/198.41.0.4 conserve la casse des noms requêtés dans les réponses (Www).\n"},{"ns":"a.root-servers.net","level":"INFO","message":"Le serveur de noms a.root-servers.net/2001:503:ba3e::2:30 conserve la casse des noms requêtés dans les réponses (Www).\n","module":"NAMESERVER"},{"message":"Le serveur de noms b.root-servers.net/199.9.14.201 conserve la casse des noms requêtés dans les réponses (Www).\n","module":"NAMESERVER","level":"INFO","ns":"b.root-servers.net"},{"level":"INFO","ns":"b.root-servers.net","module":"NAMESERVER","message":"Le serveur de noms b.root-servers.net/2001:500:200::b conserve la casse des noms requêtés dans les réponses (Www).\n"},{"module":"NAMESERVER","message":"Le serveur de noms c.root-servers.net/192.33.4.12 conserve la casse des noms requêtés dans les réponses (Www).\n","level":"INFO","ns":"c.root-servers.net"},{"module":"NAMESERVER","message":"Le serveur de noms c.root-servers.net/2001:500:2::c conserve la casse des noms requêtés dans les réponses (Www).\n","ns":"c.root-servers.net","level":"INFO"},{"message":"Le serveur de noms d.root-servers.net/199.7.91.13 conserve la casse des noms requêtés dans les réponses (Www).\n","module":"NAMESERVER","ns":"d.root-servers.net","level":"INFO"},{"ns":"d.root-servers.net","level":"INFO","message":"Le serveur de noms d.root-servers.net/2001:500:2d::d conserve la casse des noms requêtés dans les réponses (Www).\n","module":"NAMESERVER"},{"level":"INFO","ns":"e.root-servers.net","message":"Le serveur de noms e.root-servers.net/192.203.230.10 conserve la casse des noms requêtés dans les réponses (Www).\n","module":"NAMESERVER"},{"module":"NAMESERVER","message":"Le serveur de noms e.root-servers.net/2001:500:a8::e conserve la casse des noms requêtés dans les réponses (Www).\n","ns":"e.root-servers.net","level":"INFO"},{"ns":"f.root-servers.net","level":"INFO","module":"NAMESERVER","message":"Le serveur de noms f.root-servers.net/192.5.5.241 conserve la casse des noms requêtés dans les réponses (Www).\n"},{"message":"Le serveur de noms f.root-servers.net/2001:500:2f::f conserve la casse des noms requêtés dans les réponses (Www).\n","module":"NAMESERVER","ns":"f.root-servers.net","level":"INFO"},{"module":"NAMESERVER","message":"Le serveur de noms g.root-servers.net/192.112.36.4 conserve la casse des noms requêtés dans les réponses (Www).\n","ns":"g.root-servers.net","level":"INFO"},{"level":"INFO","ns":"g.root-servers.net","module":"NAMESERVER","message":"Le serveur de noms g.root-servers.net/2001:500:12::d0d conserve la casse des noms requêtés dans les réponses (Www).\n"},{"message":"Le serveur de noms h.root-servers.net/198.97.190.53 conserve la casse des noms requêtés dans les réponses (Www).\n","module":"NAMESERVER","ns":"h.root-servers.net","level":"INFO"},{"module":"NAMESERVER","message":"Le serveur de noms h.root-servers.net/2001:500:1::53 conserve la casse des noms requêtés dans les réponses (Www).\n","level":"INFO","ns":"h.root-servers.net"},{"module":"NAMESERVER","message":"Le serveur de noms i.root-servers.net/192.36.148.17 conserve la casse des noms requêtés dans les réponses (Www).\n","level":"INFO","ns":"i.root-servers.net"},{"ns":"i.root-servers.net","level":"INFO","module":"NAMESERVER","message":"Le serveur de noms i.root-servers.net/2001:7fe::53 conserve la casse des noms requêtés dans les réponses (Www).\n"},{"module":"NAMESERVER","message":"Le serveur de noms j.root-servers.net/192.58.128.30 conserve la casse des noms requêtés dans les réponses (Www).\n","ns":"j.root-servers.net","level":"INFO"},{"level":"INFO","ns":"j.root-servers.net","module":"NAMESERVER","message":"Le serveur de noms j.root-servers.net/2001:503:c27::2:30 conserve la casse des noms requêtés dans les réponses (Www).\n"},{"module":"NAMESERVER","message":"Le serveur de noms k.root-servers.net/193.0.14.129 conserve la casse des noms requêtés dans les réponses (Www).\n","ns":"k.root-servers.net","level":"INFO"},{"message":"Le serveur de noms k.root-servers.net/2001:7fd::1 conserve la casse des noms requêtés dans les réponses (Www).\n","module":"NAMESERVER","ns":"k.root-servers.net","level":"INFO"},{"ns":"l.root-servers.net","level":"INFO","module":"NAMESERVER","message":"Le serveur de noms l.root-servers.net/199.7.83.42 conserve la casse des noms requêtés dans les réponses (Www).\n"},{"module":"NAMESERVER","message":"Le serveur de noms l.root-servers.net/2001:500:9f::42 conserve la casse des noms requêtés dans les réponses (Www).\n","level":"INFO","ns":"l.root-servers.net"},{"message":"Le serveur de noms m.root-servers.net/2001:dc3::35 conserve la casse des noms requêtés dans les réponses (Www).\n","module":"NAMESERVER","ns":"m.root-servers.net","level":"INFO"},{"message":"Le serveur de noms m.root-servers.net/202.12.27.33 conserve la casse des noms requêtés dans les réponses (Www).\n","module":"NAMESERVER","level":"INFO","ns":"m.root-servers.net"},{"module":"NAMESERVER","message":"Le serveur de noms b.root-servers.net/192.228.79.201 conserve la casse des noms requêtés dans les réponses (Www).\n","level":"INFO","ns":"b.root-servers.net"},{"level":"INFO","ns":"h.root-servers.net","message":"Le serveur de noms h.root-servers.net/128.63.2.53 conserve la casse des noms requêtés dans les réponses (Www).\n","module":"NAMESERVER"},{"module":"NAMESERVER","message":"Le serveur de noms h.root-servers.net/2001:500:1::803f:235 conserve la casse des noms requêtés dans les réponses (Www).\n","level":"INFO","ns":"h.root-servers.net"},{"message":"Le serveur de noms l.root-servers.net/2001:500:3::42 conserve la casse des noms requêtés dans les réponses (Www).\n","module":"NAMESERVER","ns":"l.root-servers.net","level":"INFO"},{"message":"Lors d'une requête de type SOA pour la ressource \"www\" avec des casses différentes,  tous les serveurs retournent les mêmes résultats.\n","module":"NAMESERVER","level":"INFO","ns":"All"},{"level":"INFO","message":"Le nom de domaine (.) ne contient aucun caractère interdit.\n","module":"SYNTAX"},{"level":"INFO","module":"SYNTAX","message":"La syntaxe du nom du serveur de noms (a.root-servers.net) est valide.\n"},{"level":"INFO","message":"La syntaxe du nom du serveur de noms (b.root-servers.net) est valide.\n","module":"SYNTAX"},{"level":"INFO","message":"La syntaxe du nom du serveur de noms (c.root-servers.net) est valide.\n","module":"SYNTAX"},{"module":"SYNTAX","message":"La syntaxe du nom du serveur de noms (d.root-servers.net) est valide.\n","level":"INFO"},{"level":"INFO","module":"SYNTAX","message":"La syntaxe du nom du serveur de noms (e.root-servers.net) est valide.\n"},{"level":"INFO","message":"La syntaxe du nom du serveur de noms (f.root-servers.net) est valide.\n","module":"SYNTAX"},{"module":"SYNTAX","message":"La syntaxe du nom du serveur de noms (g.root-servers.net) est valide.\n","level":"INFO"},{"level":"INFO","message":"La syntaxe du nom du serveur de noms (h.root-servers.net) est valide.\n","module":"SYNTAX"},{"module":"SYNTAX","message":"La syntaxe du nom du serveur de noms (i.root-servers.net) est valide.\n","level":"INFO"},{"message":"La syntaxe du nom du serveur de noms (j.root-servers.net) est valide.\n","module":"SYNTAX","level":"INFO"},{"message":"La syntaxe du nom du serveur de noms (k.root-servers.net) est valide.\n","module":"SYNTAX","level":"INFO"},{"module":"SYNTAX","message":"La syntaxe du nom du serveur de noms (l.root-servers.net) est valide.\n","level":"INFO"},{"level":"INFO","message":"La syntaxe du nom du serveur de noms (m.root-servers.net) est valide.\n","module":"SYNTAX"},{"level":"INFO","message":"Il n'y a aucun caractère '@' dans le champ RNAME (nstld.verisign-grs.com.) du SOA.\n","module":"SYNTAX"},{"level":"INFO","module":"SYNTAX","message":"Le champ RNAME (nstld@verisign-grs.com) du SOA est conforme aux règles définies dans le RFC2822.\n"},{"module":"SYNTAX","message":"La syntaxe du nom du serveur maître défini dans le SOA,  'mname' (a.root-servers.net) est valide.\n","level":"INFO"},{"module":"ZONE","message":"Le serveur maître défini dans le SOA,  'mname' (a.root-servers.net),  fait autorité pour la zone '.'.\n","level":"INFO"},{"message":"Dans le SOA,  la valeur du champ 'refresh' (1800) est plus petite que la valeur recommandée (14400).\n","module":"ZONE","level":"NOTICE"},{"message":"Dans le SOA,  la valeur du champ 'refresh' (1800) est plus grande que la valeur du champ 'retry' (900).\n","module":"ZONE","level":"INFO"},{"level":"NOTICE","message":"Dans le SOA,  la valeur du champ 'retry' (900) est plus petite que la valeur recommandée (3600).\n","module":"ZONE"},{"message":"Dans le SOA,  la valeur du champ 'expire' (604800) est plus grande que la valeur minimale recommandée (604800) et pas plus petite que la valeur du champ 'refresh' (1800).\n","module":"ZONE","level":"INFO"},{"module":"ZONE","message":"Dans le SOA,  la valeur du champ 'minimum' (86400) est comprise dans l'interval de valeurs recommandées (300/86400).\n","level":"INFO"},{"level":"INFO","message":"Le serveur maître défini dans le SOA,  'mname' (a.root-servers.net),  fait référence à un serveur de noms qui n'est pas un alias (CNAME).\n","module":"ZONE"},{"module":"ZONE","message":"Le serveur maître défini dans le SOA,  'mname' (a.root-servers.net),  fait référence à un serveur de noms qui n'est pas un alias (CNAME).\n","level":"INFO"},{"level":"NOTICE","message":"Aucune possibilité (enregistrement de type \"MX\",  \"A\" ou \"AAAA\") de faire parvenir un message à ce nom de domaine.\n","module":"ZONE"}]}};


@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {
  private closeResult: string;
  private intervalTime = 5 * 1000;
  private checkboxForm: FormGroup;
  private is_advanced_options_enabled = false;
  private form = {ipv4: true, ipv6: true, profile: 'default_profile', domain: ''};
  private items = [
    {key: 'ipv4', value: 'IPv4', checked: 'true'},
    {key: 'ipv6', value: 'IPv6', checked: 'true'},
  ];
  private NSFormConfig = {
    ns: [''],
    ip: ['']
  };
  private digestFormConfig = {
    keytag: [''],
    algorithm: [''],
    digtype: [''],
    digest: ['']
  };
  public level_items: Object = {
    info: [],
    notice: [],
    warning: [],
    error: [],
    critical: [],
  };
  public result_filter: Object = {
    all: true,
    info: false,
    notice: false,
    warning: false,
    error: false,
    critical: false,
    search: ''
  };
  public NSForm: FormGroup;
  public digestForm: FormGroup;
  public domain_check_progression = 0;
  public result = [];
  public isCollapsed = [];
  public ns_list;
  public ds_list;
  public history: any = [];
  public historyItems: any = [];
  public test: any = {params: {ipv4: false, ipv6: false}};
  public modules: Object;
  public modulesKeys;
  public module_items: any = {};
  public showResult = false;
  public showProgressBar = false;
  public pagedItems: any[];
  public preDelegated;
  public pagesize = 10;
  public page = 1;
  public searchQueryLength = 0;
  public resutlCollapsed = true;

  constructor(private dnsCheckService: DnsCheckService, private translateService: TranslateService,
              private formBuilder: FormBuilder, route: ActivatedRoute, private modalService: NgbModal) {
    this.preDelegated = route.snapshot.data[0]['preDelegated'];
    this.is_advanced_options_enabled = this.preDelegated;




    // TEST
    const data = response['result'];
    this.test = {
      id: data['id'],
      creation_time: data['creation_time'],
      location: `/tests/0`, // Changed
      params: data['params']
    };

    this.result = data['results'];

    for (const item in this.result) {
      if (['WARNING'].includes(this.result[item].level)) {
        this.result[item].color = this.result[item].level.toLowerCase();
      } else if (['ERROR', 'CRITICAL'].includes(this.result[item].level)) {
        this.result[item].color = 'danger';
      } else if (['NOTICE'].includes(this.result[item].level)) {
        this.result[item].color = 'success';
      } else {
        this.result[item].color = '';
      }
    }

    this.setModulesColors(data['results']);

    this.modulesKeys = Object.keys(this.modules);
    for (let i = 0; i < this.modulesKeys.length; i++) {
      this.isCollapsed[i] = true;
      this.module_items[this.modulesKeys[i]] = [];
    }

    for (const item of data['results']) {
      this.module_items[item.module].push(item);
    }

    for (const item of data['results']) {
      this.level_items[item['level'].toLowerCase()].push(item);
    }

    this.form = data['params'];
    this.ns_list = data['ns_list'];
    this.ds_list = data['ds_list'];
  }

  ngOnInit() {
    const group = [];

    group.push(new FormGroup({
      key: new FormControl('ipv4'),
      value: new FormControl('IPv4'),
      checked: new FormControl(true)
    }));
    group.push(new FormGroup({
      key: new FormControl('ipv6'),
      value: new FormControl('IPv6'),
      checked: new FormControl(true)
    }));

    const formControlArray = new FormArray(group);

    this.checkboxForm = new FormGroup({
      items: formControlArray,
      selectedItems: new FormControl(this.mapItems(formControlArray.value), Validators.required)
    });

    formControlArray.valueChanges.subscribe((v) => {
      this.form[v.key] = v.checked;
      this.checkboxForm.controls.selectedItems.setValue(this.mapItems(v));
    });

    this.NSForm = this.formBuilder.group({
      itemRows: this.formBuilder.array([this.initItemRows(this.NSFormConfig)]) // here
    });

    this.digestForm = this.formBuilder.group({
      itemRows: this.formBuilder.array([this.initItemRows(this.digestFormConfig)]) // here
    });

  }

  public open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  addNewRow(form, value= null) {
    const control = <FormArray>this[form].controls['itemRows'];
    if (value !== null) {
      control.push(this.initItemRows(value));
    } else if (form === 'NSForm') {
      control.push(this.initItemRows(this.NSFormConfig));
    } else if (form === 'digestForm') {
      control.push(this.initItemRows(this.digestFormConfig));
    }
  }

  deleteRow(form, index: number) {
    const control = <FormArray>this[form].controls['itemRows'];
    control.removeAt(index);
  }

  initItemRows(value) {
    return this.formBuilder.group(value);
  }

  private mapItems(items) {
    const selectedItems = items.filter((l) => l.checked).map((l) => l.key);
    return selectedItems.length ? selectedItems : null;
  }

  public fetchFromParent() {
    this.dnsCheckService.fetchFromParent(this.form['domain']).then(result => {
      this.deleteRow('NSForm', 0);
      result['ns_list'].map(ns => {
        this.addNewRow('NSForm', ns);
      });

      this.deleteRow('digestForm', 0);
      result['ds_list'].map(digest => {
        this.addNewRow('digestForm', digest);
      });
    }, error => {
        console.error('Error');
    });
  }

  public domainCheck() {
    let domainCheckId: string;

    const self = this;
    if (this.form['domain'] === '') {
      console.log('nope, need domain');
      return false;
    }

    if (this.preDelegated) {
      this.form['nameservers'] = this.NSForm.value.itemRows;
      this.form['ds_info'] = this.digestForm.value.itemRows;
    }

    this.dnsCheckService.validateSyntax(this.form).then(
      result => {
        if (result['status'] === 'ok') {
          this.dnsCheckService.startDomainTest(this.form).then(id => {
            domainCheckId = id as string;
            this.showProgressBar = true;
            const handle = setInterval(() => {
              self.dnsCheckService.testProgress(domainCheckId).then(res => {

                self.domain_check_progression = res as number;

                if (res === 100) {
                  clearInterval(handle);
                  if (!this.showResult) {
                    self.displayResult(domainCheckId);
                    self.showResult = true;
                    self.showProgressBar = false;
                  }
                }
              });
            }, this.intervalTime);
          });

          this.dnsCheckService.getTestHistory(this.form).then(data => {
            this.history = data as any;
            this.historyItems = this.loadPage(1);
          });
        }
      }
    );
  }

  private displayResult(domainCheckId: string) {
    const language = this.translateService.currentLang;

    this.dnsCheckService.getTestResults({id: domainCheckId, language}).then(data => {

      // TODO Faire une moulinette

      this.test = {
        id: data['id'],
        creation_time: data['creation_time'],
        location: `/tests/${domainCheckId}`,
        params: data['params']
      };
      this.result = data['results'];
      for (const item in this.result) {
        if (['WARNING'].includes(this.result[item].level)) {
          this.result[item].color = this.result[item].level.toLowerCase();
        } else if (['ERROR', 'CRITICAL'].includes(this.result[item].level)) {
          this.result[item].color = 'danger';
        } else if (['NOTICE'].includes(this.result[item].level)) {
          this.result[item].color = 'success';
        } else {
          this.result[item].color = '';
        }
      }

      this.setModulesColors(data['results']);

      this.modulesKeys = Object.keys(this.modules);
      for (let i = 0; i < this.modulesKeys.length; i++) {
        this.isCollapsed[i] = true;
        this.module_items[this.modulesKeys[i]] = [];
      }

      for (const item of data['results']) {
        this.module_items[item.module].push(item);
      }

      for (const item of data['results']) {
        this.level_items[item['level'].toLowerCase()].push(item);
      }

      this.form = data['params'];
      this.ns_list = data['ns_list'];
      this.ds_list = data['ds_list'];
    });
  }

  public loadPage(page: number) {
    // TODO rename function
    this.historyItems = this.history.slice( (page - 1) * this.pagesize, page * this.pagesize );
  }

  public exportFile() {
    const blob = new Blob([JSON.stringify(this.result)], {
      type: 'text/html;charset=utf-8'
    });

    saveAs(blob, `zonemaster_result_${this.test['location']}.txt`);
  }

  public setModulesColors(result): void {
    const modules = {};
    for (const item of result) {
      if (typeof modules[item.module] === 'undefined') {
        modules[item.module] = '';
      }
      if (item.level === 'WARNING') {
        modules[item.module] = 'warning';
      }
      if (item.level === 'ERROR') {
        modules[item.module] = 'danger';
      }
      if (item.level === 'CRITICAL') {
        modules[item.module] = 'danger';
      }
    }
    this.modules = modules;
  }

  public togglePillFilter(name) {
    this.result_filter[name] = !this.result_filter[name];
    const atLeastOneActive = Object.keys(this.result_filter).slice(1, -1).filter(el => this.result_filter[el]);
    this.searchQueryLength = atLeastOneActive.length;

    if (atLeastOneActive.length < 1) {
      this.result_filter['all'] = true;
    } else if (name === 'all') {
      for (const index of Object.keys(this.result_filter).slice(1, -1)) {
        this.result_filter[index] = false;
      }
      this.result_filter['all'] = true;
      this.searchQueryLength = -1;
    } else {
        this.result_filter['all'] = false;
    }
  }
}
